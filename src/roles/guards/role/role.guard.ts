import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { log } from 'console';
import { ROLES_KEY } from 'src/roles/decorators/role.decorator';

// @Injectable()
// export class RoleGuard implements CanActivate {
//   constructor(
//     private readonly reflectorService:Reflector){}
//   canActivate(context: ExecutionContext): boolean {

//     const roles:string[] = this.reflectorService.get<string[]>(
//       'roles', 
//       context.getHandler()
//     )

//     if(!roles){return true}

//     const request = context.switchToHttp().getRequest();
//     const {user} = request;

//     const hasRole= ()=>user.roles.some((role:string)=>{ roles.includes(role)})

//     return user &&  user.role && hasRole()
//   }
// }

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Obtiene los roles desde el decorador @Roles
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // Si no hay roles requeridos, permite el acceso
    }

    const { user } = context.switchToHttp().getRequest();

    // Verifica si el usuario tiene el rol de admin

    console.log(user);
    console.log(user);
    // console.log(user.role.name);
    
    
    
    if (user && user.role && requiredRoles.includes(user.role.name)) {
      return true;
    }

    // Lanza una excepción si el usuario no tiene permiso
    throw new ForbiddenException('Access denied. Admin role required.');
  }
}
