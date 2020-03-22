import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemDto } from './item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity';
//import { MatchNotFoundException } from './exceptions/match.notfound.exception';
//import { MatchRepository } from './match.repository';
import { Repository } from 'typeorm';


@Injectable()
export class ItemService {

    constructor(
        @InjectRepository(ItemEntity) private readonly itemRepository: Repository<ItemEntity>,
    ) {}

    public async getAllItems(){
        let allLists = [];

        allLists = await this.itemRepository.find();
        //console.log('service getAllItems called')
        return allLists.map((item: ItemEntity) => ItemDto.createFromEntity(item));
    };

    public async createNewItem(item: ItemDto) {
        const newItemEntity = ItemEntity.createFromDto(item);
        const saveItem = await this.itemRepository.save(newItemEntity);
        return ItemDto.createFromEntity(saveItem)
    }

}