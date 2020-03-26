import { GroupService } from './group.service';
import { GroupDto } from './group.dto';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    getAllGroups(): Promise<GroupDto[]>;
    createNewGroup(newGroup: GroupDto): Promise<GroupDto>;
}
