import { ListDto } from './list.dto';
import { ListEntity } from './list.entity';
import { Repository } from 'typeorm';
export declare class ListService {
    private readonly listRepository;
    constructor(listRepository: Repository<ListEntity>);
    getAllLists(): Promise<ListDto[]>;
    createNewList(list: ListDto): Promise<ListDto>;
}
