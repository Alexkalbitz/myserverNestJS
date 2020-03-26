import { GroupDto } from './group.dto';
import { GroupEntity } from './group.entity';
import { Repository } from 'typeorm';
export declare class GroupService {
    private readonly groupRepository;
    constructor(groupRepository: Repository<GroupEntity>);
    getAllGroups(): Promise<GroupDto[]>;
    createNewGroup(group: GroupDto): Promise<GroupDto>;
}
