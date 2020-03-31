import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { GroupDto } from './group.dto';
import { UserEntity } from '../user/user.entity';
import { ListEntity } from '../list/list.entity';





@Entity()
export class GroupEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;

    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;

    

    

    // @ManyToMany(type => UserEntity, user => user.groups)
    // users: UserEntity[];

    // @ManyToMany(type => ListEntity, list => list.groups)
    // @JoinTable()
    //  lists: ListEntity[]

   

    public static createFromDto(dto: GroupDto): GroupEntity {
        const entity = new GroupEntity();
        entity.id = dto.id;
       
        entity.name = dto.name;
        

        return entity;
    }
}