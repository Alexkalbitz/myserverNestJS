import { ListEntity } from './list.entity';
export declare class ListDto {
    id: string;
    public: boolean;
    name: string;
    static createFromEntity(listEntity: ListEntity): ListDto;
}
