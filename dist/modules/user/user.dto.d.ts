import { UserEntity } from './user.entity';
export declare class UserDto {
    id: string;
    password: string;
    email: string;
    name: string;
    static createFromEntity(userEntity: UserEntity): UserDto;
}
