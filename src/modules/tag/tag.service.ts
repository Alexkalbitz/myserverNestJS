import { Injectable, NotFoundException } from '@nestjs/common';
import { TagDto } from './tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TagEntity } from './tag.entity';
//import { MatchNotFoundException } from './exceptions/match.notfound.exception';
import { Repository } from 'typeorm';


@Injectable()
export class TagService {

    constructor(
        @InjectRepository(TagEntity) private readonly tagRepository: Repository<TagEntity>,
    ) {}

    public async getAllTags(){
        let allLists = [];

        allLists = await this.tagRepository.find();
        //console.log('service getAllTags called')
        return allLists.map((tag: TagEntity) => TagDto.createFromEntity(tag));
    };

    public async createNewTag(tag: TagDto) {
        const newTagEntity = TagEntity.createFromDto(tag);
        const saveTag = await this.tagRepository.save(newTagEntity);
        return TagDto.createFromEntity(saveTag)
    }

}