import { IsNotEmpty, IsString, Max, Min, IsEnum, IsDefined, IsBoolean, IsEmail } from 'class-validator';
import { TagEntity } from './tag.entity';
import { ListEntity } from '../list/list.entity';



export class TagDto {

    @IsNotEmpty()
    public name: string;

    public lists: ListEntity[];


    public static createFromEntity(tagEntity: TagEntity): TagDto {
        const tag = new TagDto();
        tag.name = tagEntity.name;
        tag.lists = tagEntity.lists;
      
        return tag;
    }
}