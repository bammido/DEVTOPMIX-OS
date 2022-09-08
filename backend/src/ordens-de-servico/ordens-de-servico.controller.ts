import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { OrdensDeServicoService } from './ordens-de-servico.service';
import { CreateOrdensDeServicoDto } from './dto/create-ordens-de-servico.dto';
import { UpdateOrdensDeServicoDto } from './dto/update-ordens-de-servico.dto';

import { v4 as uuid } from 'uuid'


@Controller('ordens-de-servico')
export class OrdensDeServicoController {
  constructor(private readonly ordensDeServicoService: OrdensDeServicoService
    ) {}


  @Post()
  async create(@Body() createOrdensDeServicoDto: CreateOrdensDeServicoDto) {
    const {colaborador, 'cliente': Cliente} = createOrdensDeServicoDto || {}

    if(!colaborador || !Cliente) throw new HttpException('campos cliente e colaborador obrigatorios', HttpStatus.BAD_REQUEST)

    const id = uuid()
    const clientes = await this.ordensDeServicoService.create(createOrdensDeServicoDto, id)
    return {clientes};
  }

  @Get()
  async findAll() {
    const OS = await this.ordensDeServicoService.findAll()
    
    return {ordensDeServico: OS};
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordensDeServicoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdensDeServicoDto: UpdateOrdensDeServicoDto) {
    return this.ordensDeServicoService.update(id, updateOrdensDeServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordensDeServicoService.remove(id);
  }
}
