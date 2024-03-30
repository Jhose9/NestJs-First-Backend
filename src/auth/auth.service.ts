import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/interfaces/user.interfaz';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userservice: UserService,
    private jtw: JwtService,
  ) {}

  async logIn(body: {
    email: string;
    password: string;
  }): Promise<{ access_token: string }> {
    const user: User = await this.userservice.findUser(body.email);
    if (body.password !== user.password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, name: user.name };
    return {
      access_token: await this.jtw.signAsync(payload),
    };
  }
}
