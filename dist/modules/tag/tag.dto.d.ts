import { TagEntity } from './tag.entity';
export declare class TagDto {
    id: string;
    name: string;
    static createFromEntity(tagEntity: TagEntity): TagDto;
}
