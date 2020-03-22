import { IsNotEmpty, IsString, Max, Min, IsEnum, IsDefined, IsBoolean } from 'class-validator';

import { ItemEntity } from './item.entity';

export class ItemDto {

    public id: string;
    
    @IsNotEmpty()
    public link: string;


    @IsNotEmpty()
    public title: string;

    @IsNotEmpty()
    public type: string;

    @IsNotEmpty()
    public language: string;

    @IsNotEmpty()
    public author: string;

    @IsNotEmpty()
    public description: string;

    

   

    public static createFromEntity(itemEntity: ItemEntity): ItemDto {
        const item = new ItemDto();
        item.id = itemEntity.id;
        item.link = itemEntity.link;
        item.title = itemEntity.title;
        item.type = itemEntity.type;
        item.language = itemEntity.language;
        item.author = itemEntity.author;
        item.description = itemEntity.description;
      
        return item;
    }
}