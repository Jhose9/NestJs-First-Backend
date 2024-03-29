import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma.service';
import { UserMiddleware } from './middleware/user.middleware';

@Module({
  providers: [UserService, PrismaService],
  controllers: [UserController],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware, UserMiddleware).forRoutes('/user');
  }
}
//Documentation
// * Esta es la forma de implementar un middleware en este modulo especificando la ruta  y el middleware o el conjunto de ellos que se va a ejecutar consecutivamente
