
import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'src/generated/prisma/client';
// import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg'

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        const adapter = new PrismaPg({ url: process.env.DATABASE_URL });
        super({ adapter });
    }

}
