import { GroupDto } from './group.dto';
import { UserEntity } from '../user/user.entity';
import { ListEntity } from '../list/list.entity';
export declare class GroupEntity {
    id: string;
    name: string;
    created: Date;
    updated: Date;
    users: UserEntity[];
    lists: ListEntity[];
    static createFromDto(dto: GroupDto): GroupEntity;
}
