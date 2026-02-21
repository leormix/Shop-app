import { ConflictException, ForbiddenException, Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
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

    const userExist = await this.prisma.user.findUnique({
      where: { email }
    })

    if (!userExist) {
      throw new UnauthorizedException('User doesnt exist');
    }

    const isPasswordValid = await bcrypt.compare(pass, userExist.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('Wrong password')
    }

    return {
      id: userExist.id,
      email: userExist.email
    }
  }
}