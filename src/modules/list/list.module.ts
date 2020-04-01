import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ListEntity } from './list.entity';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import { UserModule } from '../user/user.module';
import { ItemModule } from '../item/item.module';
import { UserService } from '../user/user.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([ListEntity]),
        UserModule,
        forwardRef(() => ItemModule),
        //ItemModule,
    ],
    controllers: [
        ListController,
    ],
    providers: [
       ListService,
    ],
    exports: [
        ListService,
    ]
})
export class ListModule { }