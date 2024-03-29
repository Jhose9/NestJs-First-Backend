import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDtp } from './dto/user.dto';
import { User, UserData } from './interfaces/user.interfaz';

@Controller(`/user`)
export class UserController {
  constructor(private userServise: UserService) {}

  @Get(`/all`)
  helloUser(): any {
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
