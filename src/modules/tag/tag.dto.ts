import { IsNotEmpty, IsString, Max, Min, IsEnum, IsDefined, IsBoolean, IsEmail } from 'class-validator';


import { TagEntity } from './tag.entity';



export class TagDto {

    public id: string;

    @IsNotEmpty()
    public name: string;

   

    public static createFromEntity(tagEntity: TagEntity): TagDto {
        const tag = new TagDto();
        tag.id = tagEntity.id;

        tag.name = tagEntity.name;
      
        return tag;
    }
}