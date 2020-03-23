import { Injectable, NotFoundException } from '@nestjs/common';
import { GroupDto } from './group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupEntity } from './group.entity';
//import { MatchNotFoundException } from './exceptions/match.notfound.exception';
//import { MatchRepository } from './match.repository';
import { Repository } from 'typeorm';


@Injectable()
export class GroupService {

    constructor(
        @InjectRepository(GroupEntity) private readonly groupRepository: Repository<GroupEntity>,
    ) {}

    public async getAllGroups(){
        let allLists = [];

        allLists = await this.groupRepository.find();
        //console.log('service getAllGroups called')
        return allLists.map((group: GroupEntity) => GroupDto.createFromEntity(group));
    };

    public async createNewGroup(group: GroupDto) {
        const newGroupEntity = GroupEntity.createFromDto(group);
        const saveGroup = await this.groupRepository.save(newGroupEntity);
        return GroupDto.createFromEntity(saveGroup)
    }

}