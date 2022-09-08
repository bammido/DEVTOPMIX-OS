import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

@Injectable()
export class VerifyGestorAuthToken implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    
    const token: any = req.headers.authorization
    
    if(!token) res.status(401).send('sem token de Autenticacao')

    jwt?.verify(token, '123456', (error, decoded) => {
      if(error) res.status(500).send('token invalido')

      const {userEmail}: any = decoded || {}

      if(userEmail!== 'admin@admin.com') res.status(HttpStatus.METHOD_NOT_ALLOWED).send('usuario nao autorizado')
    })

    next();
  }
}