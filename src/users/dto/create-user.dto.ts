import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {

    @IsEmail()
    @MinLength(6)
    @MaxLength(255)
    email:string

    @IsString()
    @MinLength(6)
    @MaxLength(105)
    @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password must include at least one uppercase letter, one lowercase letter, and one number or special character.'
    })
    password:string

    @IsString()
    @MinLength(6)
    @MaxLength(105)
    role: string

}
