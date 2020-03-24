
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { TestUsersModule } from './testusers.module';
import { TestUsersService } from './testusers.service';
import { AuthController } from './auth.controller';


@Module({
  imports: [TestUsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers:[AuthController]
})
export class AuthModule {}

