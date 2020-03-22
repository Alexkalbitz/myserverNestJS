import { IsNotEmpty, IsString, Max, Min, IsEnum, IsDefined, IsBoolean, IsEmail } from 'class-validator';

import { GroupEntity } from './group.entity';



export class GroupDto {

    public id: string;
    
    
    

    @IsNotEmpty()
    public name: string;

   

    public static createFromEntity(groupEntity: GroupEntity): GroupDto {
        const group = new GroupDto();
        group.id = groupEntity.id;

        group.name = groupEntity.name;
      
        return group;
    }
}