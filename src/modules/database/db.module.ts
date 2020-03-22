import { Module, OnModuleDestroy, OnModuleInit, Global } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5435,
            "username": "postgres",
            "password": "POST123",
            "database": "nestJSshymbo",
            entities: ['src/**/*.entity.ts'],
            synchronize: true,
        }),
    ],
})
export class DatabaseModule implements OnModuleDestroy, OnModuleInit {

    constructor(private readonly connection: Connection) { }

    async onModuleInit() {
        await this.connection.synchronize(true);
    }

    async onModuleDestroy() {
        await this.connection.close();
    }

}