export declare type User = any;
export declare class TestUsersService {
    private readonly users;
    constructor();
    findOne(username: string): Promise<User | undefined>;
}
