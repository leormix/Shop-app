import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        // 1. Создаем пул ТОЛЬКО здесь, когда .env уже 100% загружен
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL,
        });

        // 2. Создаем адаптер
        const adapter = new PrismaPg(pool);

        // 3. Передаем адаптер в Prisma (строгое требование Prisma 7)
        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }
}