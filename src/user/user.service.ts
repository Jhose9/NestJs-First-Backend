import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserData, User } from './interfaces/user.interfaz';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async postUser(body: UserData): Promise<UserData> {
    const { email, name, password } = body;
    const datos: UserData = await this.prisma.user.create({
      data: {
        name,
        password,
        email,
      },
    });
    return datos;
  }

  async getUsers(): Promise<User[]> {
    const userAll: User[] = await this.prisma.user.findMany();
    return userAll;
  }

  async getUserById(id: number) {
    const user: User = await this.prisma.user.findUnique({ where: { id: id } });
    return user;
  }

  async deleteById(id: number): Promise<User> {
    const userDelete = await this.prisma.user.delete({ where: { id } });
    return userDelete;
  }

  async updateUser(id: number, body: UserData): Promise<User> {
    const { email, name, password } = body;
    const userUpdate: User = await this.prisma.user.update({
      where: { id },
      data: { email, name, password },
    });
    return userUpdate;
  }
}
