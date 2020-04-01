import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { MatchRepository } from './match.repository';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { ItemEntity } from './item.entity';
import { ListModule } from '../list/list.module';


@Module({
    imports: [
        TypeOrmModule.forFeature([ItemEntity]),
        forwardRef(() => ListModule),
        //ListModule,
    ],
    controllers: [
        ItemController,
    ],
    providers: [
        ItemService,
    ],
    exports:[
        ItemService
    ]
})
export class ItemModule { }