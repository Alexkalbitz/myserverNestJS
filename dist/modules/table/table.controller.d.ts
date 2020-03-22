import { TableEntryDto } from './table.dto';
import { TableService } from './table.service';
export declare class TableController {
    private readonly tableService;
    constructor(tableService: TableService);
    getTable(): Promise<TableEntryDto[]>;
}
