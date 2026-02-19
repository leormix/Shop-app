import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma.service';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    register(email: string, username: string, pass: string): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
