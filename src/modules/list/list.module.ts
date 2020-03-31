import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ListEntity } from './list.entity';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import { UserModule } from '../user/user.module';


@Module({
    imports: [
        TypeOrmModule.forFeature([ListEntity]),
        UserModule,
    ],
    controllers: [
        ListController,
    ],
    providers: [
       ListService,
    ],
})
export class ListModule { }