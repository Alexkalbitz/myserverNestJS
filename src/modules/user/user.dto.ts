import { IsNotEmpty, IsString, Max, Min, IsEnum, IsDefined, IsBoolean, IsEmail } from 'class-validator';
import { UserEntity } from './user.entity';
import { ListEntity } from '../list/list.entity';



export class UserDto {

    public id: string;
    
    public password: string;

    @IsEmail()
    public email: string;

    @IsNotEmpty()
    public username: string;

    public lists: ListEntity[];

   

    public static createFromEntity(userEntity: UserEntity): UserDto {
        const user = new UserDto();
        user.id = userEntity.id;
        user.password = userEntity.password;
        user.email = userEntity.email;
        user.username = userEntity.username;
      
        return user;
    }

    public static createForClient(userEntity:UserEntity): UserDto{
        const user = new UserDto();
        user.id = userEntity.id;
        user.username = userEntity.username;
        user.lists = userEntity.lists;

        return user;
    }
    
}