import { UserService } from 'modules/user/user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    validateUser(id: string): Promise<any>;
}
