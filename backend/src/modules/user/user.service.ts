import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/modules/_global/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getPersonalInfo(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        email: true,
        name: true,
        image: true,
        createdAt: true,
      },
    });
    return user;
  }

  async updatePersonalInfo(
    email: string,
    name?: string,
    password?: string,
    image?: string,
  ) {
    try {
      const data = {};
      if (name) data['name'] = name;
      if (image) data['image'] = image;
      if (password) {
        const hashedPass = await bcrypt.hash(password, 12);
        data['password'] = hashedPass;
      }
      const user = await this.prisma.user.update({
        where: { email },
        data,
        select: {
          email: true,
          name: true,
          image: true,
          createdAt: true,
        },
      });
      if (!user) throw new NotFoundException('User not found');
      return user;
    } catch (error) {
      if (error.status) throw error;
      throw new BadRequestException(error.message);
    }
  }

  async deleteUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) throw new NotFoundException('User not found');
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) throw new ForbiddenException('Wrong password');
    await this.prisma.user.delete({
      where: { email },
    });
  }
}
