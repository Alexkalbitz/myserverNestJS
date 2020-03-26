import { ItemEntity } from './item.entity';
export declare class ItemDto {
    id: string;
    link: string;
    title: string;
    type: string;
    language: string;
    author: string;
    description: string;
    static createFromEntity(itemEntity: ItemEntity): ItemDto;
}
