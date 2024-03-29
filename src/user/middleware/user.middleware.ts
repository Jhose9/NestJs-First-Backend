import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
//Documentation
// * Esta es la forma de crear un middleware si necesitamos depentencias, pero tambien podemos definir un middleware como una funcion si no necesitamos inyectar ninguna dependencia.
