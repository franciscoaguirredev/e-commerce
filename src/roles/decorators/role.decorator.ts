// import { SetMetadata } from "@nestjs/common";
// export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
import { SetMetadata } from "@nestjs/common";

export const ROLES_KEY = 'admin';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);