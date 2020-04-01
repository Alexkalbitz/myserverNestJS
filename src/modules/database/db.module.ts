import { Module, OnModuleDestroy, OnModuleInit, Global } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';



@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot(),
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