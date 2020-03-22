import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserDto } from './user.dto';
import { GroupEntity } from '../group/group.entity';

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
    public name: string;

    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;

    @ManyToOne(type => UserEntity, user => user.id)
    friends: UserEntity[]

    @ManyToMany(type => GroupEntity, group => group.users)
    @JoinTable()
    groups: GroupEntity[]; 

  

    public static createFromDto(dto: UserDto): UserEntity {
        const entity = new UserEntity();
        entity.id = dto.id;
        entity.password = dto.password;
        entity.email = dto.email;
        entity.name = dto.name;
        

        return entity;
    }
}