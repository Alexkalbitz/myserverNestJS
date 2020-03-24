
import { Module } from '@nestjs/common';
import { TestUsersService } from './testusers.service';

@Module({
  providers: [TestUsersService],
  exports: [TestUsersService],
})
export class TestUsersModule {}