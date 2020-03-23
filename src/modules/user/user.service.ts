import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
//import { MatchNotFoundException } from './exceptions/match.notfound.exception';
//import { MatchRepository } from './match.repository';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    ) {}

    public async getAllUsers(){
        let allLists = [];

        allLists = await this.userRepository.find();
        //console.log('service getAllUsers called')
        return allLists.map((user: UserEntity) => UserDto.createFromEntity(user));
    };

    public async createNewUser(user: UserDto) {
        const newUserEntity = UserEntity.createFromDto(user);
        const saveUser = await this.userRepository.save(newUserEntity);
        return UserDto.createFromEntity(saveUser)
    }

}