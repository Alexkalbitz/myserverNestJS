import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
export declare type User = any;
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    getAllUsers(): Promise<UserDto[]>;
    createNewUser(user: UserDto): Promise<UserDto>;
    findOne(id: string): Promise<User | undefined>;
}
