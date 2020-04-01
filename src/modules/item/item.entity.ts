import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm';


import { ItemDto } from './item.dto';
import { ListEntity } from '../list/list.entity';
import { UserEntity } from '../user/user.entity';
import { TagEntity } from '../tag/tag.entity';

@Entity()
export class ItemEntity {

    @PrimaryGeneratedColumn('increment')
    public id: string;


    @Column({
        type: "text",
        default: "title",
    })
    public title: string;


    @Column({
        type: "varchar",
        default: "no link",
    })
    public link: string;


    @Column({
        type: "varchar",
        length: 25,
        default: "type",
    })
    public type: string;


    @Column({
        type: "varchar",
        length: 15,
        default: "English",
    })
    public language: string;


    @Column({
        nullable: true,
        type: "varchar",
        length: 50,
        default: "title",
    })
    public author: string;


    @Column({
        type: "varchar",
        length: 500,
        default: "description",
    })
    public description: string;


    //Autocreated
    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;
    

    //relations
    @ManyToOne(type => ListEntity, list => list.id)
    public list: ListEntity;

  

    public static createFromDto(dto: ItemDto): ItemEntity {
        const entity = new ItemEntity();
        entity.id = dto.id;
        entity.link = dto.link;
        entity.title = dto.title;
        entity.type = dto.type;
        entity.language = dto.language;
        entity.author = dto.author;
        entity.description = dto.description;
        entity.list = dto.list

        return entity;
    }
}