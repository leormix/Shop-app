import { ConflictException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {

  constructor(private prisma: PrismaService) { }



  async register(email: string, username: string, pass: string) {

    const password = await bcrypt.hash(pass, 10)
    const userExist = await this.prisma.user.findUnique({
      where: { email }
    })

    if (userExist) {
      throw new ConflictException('User is already exist ')
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
