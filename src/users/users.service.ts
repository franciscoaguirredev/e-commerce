import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { find } from 'rxjs';
import { error } from 'console';
import { Role } from 'src/roles';

@Injectable()
export class UsersService{

  constructor(
    @InjectRepository(User) private readonly userRepository:Repository<User>,
  ){}

  async create(createUserDto : CreateUserDto):Promise<User | string>{
    console.log(createUserDto)
      try {
        const findUser = await this.userRepository.findOne({where: {email: createUserDto.email}})
        if(findUser){
            return "Email alredy exists"
        }

        const user = await this.userRepository.create(createUserDto)
        await this.userRepository.save(user)
        console.log(user)
        return user
      } catch (error) {
        return `Error creating User ${error}`
        
      }
  };

  async findAll() {
    
    const users = await this.userRepository.find({
      relations:[
        'roleId'
      ]
    })
    return users;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
