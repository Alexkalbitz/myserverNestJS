import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/db.module';
// import { MatchModule } from './modules/match/match.module';
// import { TableModule } from './modules/table/table.module';
import { ListModule } from './modules/list/list.module';
import { ItemModule } from './modules/item/item.module';
import { TagModule } from './modules/tag/tag.module';
import { GroupModule } from './modules/group/group.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [
    DatabaseModule,
    //MatchModule,
    //TableModule,
    TagModule,
    ItemModule,
    //GroupModule,
    ListModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule { }
