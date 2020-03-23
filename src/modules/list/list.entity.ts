import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

import { ListDto } from '../list/list.dto';
import { UserDto } from '../user/user.dto';
import { UserEntity } from '../user//user.entity';
import { ItemEntity } from '../item//item.entity';
import { GroupEntity } from '../group/group.entity';

@Entity()
export class ListEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public public: boolean;

    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;

    @Column()
    public name: string;

    @ManyToOne(type => UserEntity, user => user.id)
    user: UserEntity; 

    @ManyToMany(type => GroupEntity, group => group.lists)
    groups: GroupEntity[]; 

 

    public static createFromDto(dto: ListDto): ListEntity {
        const entity = new ListEntity();
        entity.id = dto.id;
        entity.public = dto.public;
        entity.name = dto.name;
        return entity;
    }
}