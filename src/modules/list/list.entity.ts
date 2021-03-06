import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

import { ListDto } from '../list/list.dto';
import { UserEntity } from '../user//user.entity';
import { ItemEntity } from '../item//item.entity';
import { TagEntity } from '../tag/tag.entity';


@Entity()
export class ListEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({
        default: false,
        type: "boolean",
    })
    public public: boolean;


    @Column({
        type: "varchar",
        length: 30,
        default: "title",
    })
    public title: string;


    @Column({
        type: "varchar",
        length: 500,
        default: "description",
    })
    public description: string;


    //Relations
    @ManyToOne(() => UserEntity, user => user.id, {
        eager: true,
        onDelete: 'CASCADE'
    })
    public owner: UserEntity; 

    @OneToMany(() => ItemEntity, item => item.id)
    public items: ItemEntity[];


    @ManyToMany(() => TagEntity, tag => tag.name, {
        cascade: ['insert'],
        eager: true 
    })
    @JoinTable()
    public tags: TagEntity[];


    // Autogenerated
    @CreateDateColumn({update: false})
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;
 

    public static createFromDto(dto: ListDto): ListEntity {
        const entity = new ListEntity();
        entity.id = dto.id;
        entity.public = dto.public;
        entity.title = dto.title;
        entity.description = dto.description;
        entity.items = dto.items;
        entity.owner = dto.owner;
        entity.tags = dto.tags;
        return entity;
    }

}