import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/db.module';
import { MatchModule } from './modules/match/match.module';
import { TableModule } from './modules/table/table.module';
import { ListModule } from 'modules/list/list.module';
import { ItemModule } from 'modules/item/item.module';


@Module({
  imports: [
    DatabaseModule,
    MatchModule,
    TableModule,
    ItemModule,
    ListModule,
  ],
})
export class AppModule { }
