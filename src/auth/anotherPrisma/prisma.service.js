import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';
@Injectable()
export class PrismaService extends PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
}
//# sourceMappingURL=prisma.service.js.map