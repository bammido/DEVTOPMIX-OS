import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

@Injectable()
export class VerifyAuthToken implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    
    const token: any = req.headers.authorization

    console.log(token)
    
    if(!token) res.status(401).send('sem token de Autenticacao')

    await jwt?.verify(token, '123456', (error, decoded) => {
      if(error) res.status(500).send('token invalido')
    })

    next();
  }
}