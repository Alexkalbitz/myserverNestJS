import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, ManyToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { GroupDto } from '../group/group.dto';
import { ItemEntity } from '../item/item.entity';






@Entity()
export class TagEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;

    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;

    

    

   @ManyToMany(type => ItemEntity, item => item.id)
   items: ItemEntity[];

    

   

    public static createFromDto(dto: GroupDto): TagEntity {
        const entity = new TagEntity();
        entity.id = dto.id;
       
        entity.name = dto.name;
        

        return entity;
    }
}