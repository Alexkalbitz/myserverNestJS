import { IsNotEmpty, IsString, Max, Min, IsEnum, IsDefined, IsBoolean, IsNotEmptyObject } from 'class-validator';
import { Timestamp } from 'typeorm';
import { ListEntity } from './list.entity';
import { UserEntity } from '../user/user.entity';

export class ListDto {

    public id: string;
    
    @IsBoolean()
    public public: boolean;

    @IsNotEmpty()
    public title: string;

    public description: string

    public owner: UserEntity;

    public created: Date;

    public updated: Date;
   

    public static createFromEntity(listEntity: ListEntity): ListDto {
        const list = new ListDto();
        list.id = listEntity.id;
        list.public = listEntity.public;
        list.title = listEntity.title;
        list.description = listEntity.description;
        list.owner = listEntity.owner;

        return list;
    }

    public static createForClient(listEntity: ListEntity): ListDto {
        const list = new ListDto();
        list.id = listEntity.id;
        list.public = listEntity.public;
        list.title = listEntity.title;
        list.description = listEntity.description;
        list.created = listEntity.created;
        list.updated = listEntity.updated;
        list.owner = listEntity.owner;

        delete list.owner.password;
        delete list.owner.email;
        return list;
    }



}