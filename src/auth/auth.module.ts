import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.DATA_KEY,
      signOptions: { expiresIn: '200s' }, // Opciones adicionales de firma, como el tiempo de expiración del token
    }),
  ],
})
export class AuthModule {}
