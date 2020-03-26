import { ItemDto } from './item.dto';
import { ItemEntity } from './item.entity';
import { Repository } from 'typeorm';
export declare class ItemService {
    private readonly itemRepository;
    constructor(itemRepository: Repository<ItemEntity>);
    getAllItems(): Promise<ItemDto[]>;
    createNewItem(item: ItemDto): Promise<ItemDto>;
}
