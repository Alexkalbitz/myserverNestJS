import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, ManyToMany, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { ListEntity } from '../list/list.entity';
import { TagDto } from './tag.dto';





@Entity()
export class TagEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({unique: true})    
    public name: string;

    @CreateDateColumn()
    public created: Date;

    @ManyToMany(() => ListEntity, list => list.id)
    lists: ListEntity[];

    

   

    public static createFromDto(dto: TagDto): TagEntity {
        const entity = new TagEntity();
        entity.id = dto.id;
        entity.name = dto.name;
        entity.lists = dto.lists
        
        return entity;
    }
}