import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListDto } from './list.dto';
import { ListEntity } from './list.entity';
import { Repository, DeleteResult } from 'typeorm';
import { UserService } from '../user/user.service';
import { MyErrorException } from './exceptions/myerror.exception';



@Injectable()
export class ListService {

    constructor(
        @InjectRepository(ListEntity) 
        private readonly listRepository: Repository<ListEntity>,
        //private readonly userRepository: Repository<UserEntity>,
        private readonly userService: UserService,
      ) { }

    public async getAllLists(): Promise<ListDto[]> {
        let allLists = [];
        allLists = await this.listRepository.find();

        return allLists.map((list: ListEntity)=> ListDto.createFromEntity(list));
    }


    public async createNewList(list: ListDto, userId: string): Promise<ListDto> {
        const user = await this.userService.findOneById(userId)

        //ListEntity.createFromDto does not attach a UserEntity!
        const newListEntity = ListEntity.createFromDto(list); 
        newListEntity.owner = user;
        const saveList = await this.listRepository.save(newListEntity);

        //dont return saveList there is data you dont want to send
        const result = ListDto.createForClient(saveList);
        return result
    }

    public async updateList(listToUpdate: ListDto, userId: string): Promise<ListDto> {
        if (userId !== listToUpdate.owner.id){
            throw new MyErrorException('you dont have permission to update this list (sent data)');
        }
        const indb = await this.listRepository.findOne(listToUpdate.id);
        if (!indb) {
            throw new NotFoundException();
        } 
        if (indb.owner.id !== userId) {
            throw new MyErrorException('List from db owner is not you!')
        }
        
        const updated = this.listRepository.merge(indb, listToUpdate);
        const result = await this.listRepository.save(updated);
        
        return ListDto.createForClient(result);
    }

    public async findOneById(id: string): Promise<ListEntity> {
        const list = await this.listRepository.findOneOrFail({id:id});
        return list;
    }


    public async deleteList(listId: string, userId: string): Promise<DeleteResult>{
        const list = await this.listRepository.findOne(listId);
        if (list.owner.id !== userId){
            throw new MyErrorException('You are not the Owner');
        } 

        const res = await this.listRepository.delete(listId);
        return res

    }
}