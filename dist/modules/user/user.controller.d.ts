import { UserService } from './user.service';
import { UserDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<UserDto[]>;
    createNewUser(newUser: UserDto): Promise<UserDto>;
}
