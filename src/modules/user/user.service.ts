import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
//import { MatchNotFoundException } from './exceptions/match.notfound.exception';
//import { MatchRepository } from './match.repository';
import { Repository } from 'typeorm';

//delete this later
export type User = any;


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
    };

    public async findOne(username: string): Promise<User | undefined>{
        const users = [
            {
              userId: 1,
              username: 'john',
              password: 'changeme',
            },
            {
              userId: 2,
              username: 'chris',
              password: 'secret',
            },
            {
              userId: 3,
              username: 'maria',
              password: 'guess',
            },
          ];
        console.log("findOne in user.service");
        
        return users.find(users => users.username === username)
    };
};

