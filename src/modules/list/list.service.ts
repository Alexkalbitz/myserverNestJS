import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListDto } from './list.dto';
import { ListEntity } from './list.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ListService {

    constructor(
        @InjectRepository(ListEntity) private readonly listRepository: Repository<ListEntity>,
      ) { }

    public async getAllLists(): Promise<ListDto[]> {
        let allLists = [];

        allLists = await this.listRepository.find();

        return allLists.map((list: ListEntity)=> ListDto.createFromEntity(list));
    }


    public async createNewList(list: ListDto): Promise<ListDto> {
        const newListEntity = ListEntity.createFromDto(list);
        const saveList = await this.listRepository.save(newListEntity);
        return ListDto.createFromEntity(saveList);

    }



}