import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

import {v4 as uuid} from 'uuid'

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    const {nome} = createClienteDto || {}

    if(!nome) throw new HttpException('nome obrigatorio', HttpStatus.BAD_REQUEST)

    const cliente = await this.clientesService.findByName(nome)
    const {'id': clienteId} = cliente || {}
    if(clienteId) throw new HttpException('ja existe um cliente com esse nome', HttpStatus.CONFLICT)
    const id = uuid()
    return this.clientesService.create(createClienteDto, id);
  }

  @Get()
  async findAll() {
    const clientes = await this.clientesService.findAll()
    return {clientes};
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(id);
  }
}
