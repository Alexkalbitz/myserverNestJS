import { TagDto } from './tag.dto';
import { TagEntity } from './tag.entity';
import { Repository } from 'typeorm';
export declare class TagService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<TagEntity>);
    getAllTags(): Promise<TagDto[]>;
    createNewTag(tag: TagDto): Promise<TagDto>;
}
