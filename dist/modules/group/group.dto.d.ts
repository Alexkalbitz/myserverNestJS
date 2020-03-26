import { GroupEntity } from './group.entity';
export declare class GroupDto {
    id: string;
    name: string;
    static createFromEntity(groupEntity: GroupEntity): GroupDto;
}
