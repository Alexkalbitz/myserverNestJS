import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Connection } from 'typeorm';
export declare class DatabaseModule implements OnModuleDestroy, OnModuleInit {
    private readonly connection;
    constructor(connection: Connection);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
