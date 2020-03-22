import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { MatchRepository } from './match.repository';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { ItemEntity } from './item.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ItemEntity]),
    ],
    controllers: [
        ItemController,
    ],
    providers: [
        ItemService,
    ],
})
export class ItemModule { }