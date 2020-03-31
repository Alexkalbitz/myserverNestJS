import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListDto } from './list.dto';
import { ListEntity } from './list.entity';
import { Repository } from 'typeorm';
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
        return ListDto.createForClient(saveList);
    }

    public async updateList(listToUpdate: ListDto, userId: string): Promise<ListDto> {
        if (userId !== listToUpdate.owner.id){
            throw new MyErrorException('you dont have permission to update this list');
        }
        const indb = await this.listRepository.findOne(listToUpdate.id);
        console.log("indb=====", indb);
        
        if (!indb) {
            throw new NotFoundException();
        }
        const updated = await this.listRepository.merge(indb, listToUpdate);
        const result = await this.listRepository.save(updated);
        
        return ListDto.createForClient(result);
    }

}