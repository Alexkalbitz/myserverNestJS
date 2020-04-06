import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, ManyToMany, CreateDateColumn, UpdateDateColumn, Unique, JoinTable, PrimaryColumn } from 'typeorm';
import { ListEntity } from '../list/list.entity';
import { TagDto } from './tag.dto';




@Unique(['name'])
@Entity()
export class TagEntity {


    @PrimaryColumn({name:'name'}) 
    public name: string;


    @ManyToMany(() => ListEntity, list => list.id, {
        cascade: ['insert']
    })
    lists: ListEntity[];

    

   

    public static createFromDto(dto: TagDto): TagEntity {
        const entity = new TagEntity();
        entity.name = dto.name;
        entity.lists = dto.lists
        
        return entity;
    }
}