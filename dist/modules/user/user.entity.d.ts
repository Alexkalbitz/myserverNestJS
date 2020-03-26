import { UserDto } from './user.dto';
import { GroupEntity } from '../group/group.entity';
export declare class UserEntity {
    id: string;
    password: string;
    email: string;
    name: string;
    created: Date;
    updated: Date;
    friends: UserEntity[];
    groups: GroupEntity[];
    static createFromDto(dto: UserDto): UserEntity;
}
