import { GroupDto } from '../group/group.dto';
import { ItemEntity } from '../item/item.entity';
export declare class TagEntity {
    id: string;
    name: string;
    created: Date;
    updated: Date;
    items: ItemEntity[];
    static createFromDto(dto: GroupDto): TagEntity;
}
