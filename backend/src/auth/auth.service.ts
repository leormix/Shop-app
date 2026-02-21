import { ConflictException, ForbiddenException, Injectable, BadRequestException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class AuthService {

  constructor(private prisma: PrismaService) { }

  async register(email: string, pass: string) {

    if (!email || !pass) {
      throw new BadRequestException('Email and password are neccesary');
    }

    const userExist = await this.prisma.user.findFirst({
      where: { email }
    })

    if (userExist) {
      throw new ConflictException('User is already exist ')
    }

    const hashed_password = await bcrypt.hash(pass, 10)

    return this.prisma.user.create({
      data: {
        email,
        password: hashed_password,
      },
      select: {
        id: true,
        email: true,
      }
    })
  }

  async login(email: string, pass: string) {
    if (!email || !pass) {
      throw new BadRequestException('Email and password are neccesary');
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
