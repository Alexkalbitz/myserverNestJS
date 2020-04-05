import { Injectable, NotFoundException, forwardRef, Inject } from '@nestjs/common';
import { ItemDto } from './item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity';
//import { MatchNotFoundException } from './exceptions/match.notfound.exception';
//import { MatchRepository } from './match.repository';
import { Repository, DeleteResult } from 'typeorm';
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


    public async getItemById(itemId): Promise<ItemEntity> {
        const item = await this.itemRepository.findOne(itemId,  { relations: ["list"] });
        return item
    }

    public async getAllItems() {
        let allLists = [];
        allLists = await this.itemRepository.find();
        const res = allLists.map((item: ItemEntity) => ItemDto.createFromEntity(item))
        return res;
    };


    public async createNewItem(item: any, userId:string, listId:string) {    
        const parentlist = await this.listService.findOneById(listId);
        if (!parentlist || parentlist.owner.id !== userId) {
            throw new MyErrorException('list not found or not the owner')
        }

        //add the parentlist to the item 

        item.list = parentlist
        const newItemEntity = ItemEntity.createFromDto(item);        
        const saveItem = await this.itemRepository.save(newItemEntity);
        const result = ItemDto.createFromEntity(saveItem)

        //important to delete data that should not be sent to the Client

        delete result.list.owner.password
        delete result.list.owner.email

        return result
    }


    public async updateItem(item: any, userId:string, listId:string) { 
        const itemInDb = await this.getItemById(item.id)

        //authorization for changes to List/item in the list
        const parentlist = await this.listService.findOneById(listId);
        if (!parentlist || parentlist.owner.id !== userId) {
            throw new MyErrorException('list not found or not the owner')
        }

        const updated = this.itemRepository.merge(itemInDb, item);        
        const saveItem = await this.itemRepository.save(updated);
        const result = ItemDto.createFromEntity(saveItem)
        return result
    }


    public async deleteItem(userId, itemId): Promise<DeleteResult>{
        const indb = await this.getItemById(itemId);
        const parentlist = await this.listService.findOneById(indb.list.id)

        if (!parentlist || parentlist.owner.id !== userId) {
            throw new MyErrorException('this items list and owner dont match ur request')
        }

        const res = await this.itemRepository.delete(itemId);
        return res
    }



}

