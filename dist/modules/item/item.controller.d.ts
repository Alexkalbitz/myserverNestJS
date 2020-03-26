import { ItemService } from './item.service';
import { ItemDto } from './item.dto';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    getAllItems(): Promise<ItemDto[]>;
    createNewItem(newItem: ItemDto): Promise<ItemDto>;
}
