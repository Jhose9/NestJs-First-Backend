import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDtp } from './dto/user.dto';
import { User, UserData } from './interfaces/user.interfaz';
import { Response } from 'express';

@Controller(`/user`)
export class UserController {
  constructor(private userServise: UserService) {}

  @Get()
  getQuery(@Query() query: { value: number }, @Res() res: Response) {
    res.json({ Query: query.value });
  }

  @Get(`/all`)
  async helloUser(): Promise<User[]> {
    return this.userServise.getUsers();
  }

  @Get(`/:id`)
  getUserById(@Param(`id`) id: string) {
    const userId: number = parseInt(id, 10);
    return this.userServise.getUserById(userId);
  }

  @Post()
  async postUser(@Body() user: CreateUserDto): Promise<UserData> {
    return this.userServise.postUser(user);
  }

  @Delete(`/:id`)
  async deleteUser(@Param(`id`) id: string): Promise<User> {
    const userId: number = parseInt(id);
    return this.userServise.deleteById(userId);
  }

  @Patch(`/:id`)
  async updateUser(
    @Param(`id`) id: string,
    @Body() updateUser: UpdateUserDtp,
  ): Promise<User> {
    const userId: number = parseInt(id);
    return this.userServise.updateUser(userId, updateUser);
  }
}

// Documentation
// * Query sirve para extraer parámetros enviados de esta manera -> http://localhost:3000/user?value=10 y obteniendo el value 10
