import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { UserDto } from './user.dto';
import { GroupEntity } from '../group/group.entity';
import { ListEntity } from '../list/list.entity';

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    //@OneToMany (friends)
    public id: string;

    @Column()
    public password: string;

    @Column() 
    public email: string;

    @Column() 
    public username: string;

    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;

    @OneToMany(type => ListEntity, list => list.id)
    lists: ListEntity[]


    // @ManyToOne(type => UserEntity, user => user.id)
    // friends: UserEntity[]

    // @ManyToMany(type => GroupEntity, group => group.users)
    // @JoinTable()
    // groups: GroupEntity[]; 

  

    public static createFromDto(dto: UserDto): UserEntity {
        const entity = new UserEntity();
        entity.id = dto.id;
        entity.password = dto.password;
        entity.email = dto.email;
        entity.username = dto.username;
        entity.lists = dto.lists;
        

        return entity;
    }
}