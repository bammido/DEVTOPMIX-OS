import { Req , Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, HttpException, HttpStatus, Res } from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { CreateColaboradoreDto } from './dto/create-colaboradore.dto';
import { UpdateColaboradoreDto } from './dto/update-colaboradore.dto';

import {v4 as uuid} from 'uuid'

const jwt  = require('jsonwebtoken');

import { Request, Response } from 'express';
import { Colaboradore } from './entities/colaboradore.entity';

const SECRET = '123456'

@Controller('colaboradores')
export class ColaboradoresController {
  constructor(private readonly colaboradoresService: ColaboradoresService) {}

  @Post()
  async Create(@Body() body: CreateColaboradoreDto) {
    const { email, senha, nome} = body || {}
    
    if(!nome || !email || !senha) throw new HttpException('informe os campos email, senha e nome', HttpStatus.BAD_REQUEST)
    
    const alredyExists =  await this.colaboradoresService.verifyIsSignUp(body.email)
    
    if(alredyExists) throw new HttpException('email ja cadastrado', HttpStatus.CONFLICT)

    const id = uuid()
    return this.colaboradoresService.create(body, id)
  }

  @Post('login')
  async Login(@Body() body: {email: string, senha: string}, @Res() res:Response) {
    const {email, senha} = body
    const colaborador = await this.colaboradoresService.login(email, senha)
    
    if(!email || !senha) throw new HttpException('passe email e senha', HttpStatus.BAD_REQUEST)
    const {id , nome}= colaborador || {}
    if(!nome) throw new HttpException('email ou senha incorretos', HttpStatus.NOT_FOUND)
    const token = jwt.sign({userId: id, userEmail: email}, SECRET, {expiresIn: 60*60})

    res.status(200).send({token, colaboradorData: {email, id, nome}})
  }

  @Get()
  async findAll(@Res() res:Response) {
    const colaboradores = await this.colaboradoresService.findAll()
     res.status(200).send({colaboradores});
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    
    try {
      const colaborador = await this.colaboradoresService.findOne(id)
      const {nome} = colaborador || {}
      if(!nome) throw new HttpException('nenhum usuario encontrado', HttpStatus.NOT_FOUND)
      res.status(200).send(colaborador);
    } catch (error) {
      res.status(404).send('nenhum usuario encontrado')
    }
    
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColaboradoreDto: UpdateColaboradoreDto) {
    return this.colaboradoresService.update(id, updateColaboradoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colaboradoresService.remove(id);
  }
}
