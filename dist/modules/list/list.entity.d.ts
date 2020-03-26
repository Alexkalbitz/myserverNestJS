import { ListDto } from '../list/list.dto';
import { UserEntity } from '../user//user.entity';
import { GroupEntity } from '../group/group.entity';
export declare class ListEntity {
    id: string;
    public: boolean;
    created: Date;
    updated: Date;
    name: string;
    user: UserEntity;
    groups: GroupEntity[];
    static createFromDto(dto: ListDto): ListEntity;
}
