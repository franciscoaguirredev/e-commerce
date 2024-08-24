import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";

export interface IUsersService{
    create(createUser : CreateUserDto): Promise<User>;

    findOne(id):Promise<User>;
}