import { TagService } from './tag.service';
import { TagDto } from './tag.dto';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    getAllTags(): Promise<TagDto[]>;
    createNewTag(newTag: TagDto): Promise<TagDto>;
}
