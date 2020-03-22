import { IsNotEmpty, IsString, Max, Min, IsEnum, IsDefined, IsBoolean, IsEmail } from 'class-validator';
import { UserEntity } from './user.entity';



export class UserDto {

    public id: string;
    
    
    public password: string;

    @IsEmail()
    public email: string;

    @IsNotEmpty()
    public name: string;

   

    public static createFromEntity(userEntity: UserEntity): UserDto {
        const user = new UserDto();
        user.id = userEntity.id;
        user.password = userEntity.password;
        user.email = userEntity.email;
        user.name = userEntity.name;
      
        return user;
    }
}