import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { MatchRepository } from './match.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { AuthModule } from 'modules/auth/auth.module';
import { AuthController } from 'modules/auth/auth.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
    ],
    controllers: [
        UserController,
    ],
    providers: [
        UserService,
    ],
    exports:[
        UserService,
    ],
})
export class UserModule { }