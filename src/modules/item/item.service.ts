import { Injectable, NotFoundException, forwardRef, Inject } from '@nestjs/common';
import { ItemDto } from './item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity';
//import { MatchNotFoundException } from './exceptions/match.notfound.exception';
//import { MatchRepository } from './match.repository';
import { Repository } from 'typeorm';
import { ListService } from '../list/list.service';
import { MyErrorException } from '../list/exceptions/myerror.exception';



@Injectable()
export class ItemService {

    constructor(
        @InjectRepository(ItemEntity)
        private readonly itemRepository: Repository<ItemEntity>,
        //@Inject(forwardRef(() => ListService))
        private readonly listService: ListService,
    ) { }

    public async getAllItems() {
        let allLists = [];

        allLists = await this.itemRepository.find();
        //console.log('service getAllItems called')
        return allLists.map((item: ItemEntity) => ItemDto.createFromEntity(item));
    };

    public async createNewItem(item: any, userId:any) {        
        console.log(item.listId);
        
        const parentlist = await this.listService.findOneById(item.listId);
        if (!parentlist || parentlist.owner.id !== userId) {
            throw new MyErrorException('list not found or not the owner')
        }
        item.list = parentlist
        const newItemEntity = ItemEntity.createFromDto(item);
        //console.log('with List?', newItemEntity);
        
        const saveItem = await this.itemRepository.save(newItemEntity);
        const result = ItemDto.createFromEntity(saveItem)
        delete result.list.owner.password
        delete result.list.owner.email

        return result
    }

}

