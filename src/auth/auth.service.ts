
import { Injectable, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { PrismaService } from './anotherPrisma/prisma.service.js';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) { };

    async signup(dto: { email: string, password: string }) {
        const hash = await bcrypt.hash(dto.password, 10)

        try {
            const newUser = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    password: hash,
                }
            });
            return this.signUpToken(newUser.id, newUser.email)
        } catch (e) {
            if (e = 'P2002') {
                return "Email already exists"
            } throw e;
        }
    }

    async login(dto: { email: string, password: string }) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (!user) throw new ForbiddenException('Credinteals incorrect')

        const comparing = bcrypt.compare.arguments(dto.email, dto.password)

        if (!comparing) throw new ForbiddenException('Wrong mail or pass')

        return this.signUpToken(user.id, user.email)
    }

    async signUpToken(userId: number, email: string): Promise<{ access_token: string }> {
        const payload = { sub: userId, email }
        const token = await this.prisma.jwtService.signAsync(payload, {
            expiresIn: '15m',
            secret: 'SUPER_PUPER_SECRET_KEY'
        })


        return { access_token: token }

    }

}
