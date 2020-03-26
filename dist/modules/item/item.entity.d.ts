import { ItemDto } from './item.dto';
import { ListEntity } from '../list/list.entity';
import { UserEntity } from '../user/user.entity';
import { TagEntity } from '../tag/tag.entity';
export declare class ItemEntity {
    id: string;
    link: string;
    title: string;
    type: string;
    language: string;
    author: string;
    description: string;
    created: Date;
    updated: Date;
    user: UserEntity;
    list: ListEntity;
    tags: TagEntity[];
    static createFromDto(dto: ItemDto): ItemEntity;
}
