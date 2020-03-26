import { ListDto } from './list.dto';
import { ListService } from './list.service';
export declare class ListController {
    private readonly listService;
    constructor(listService: ListService);
    getAllLists(): Promise<ListDto[]>;
    createNewList(newList: ListDto): Promise<ListDto>;
}
