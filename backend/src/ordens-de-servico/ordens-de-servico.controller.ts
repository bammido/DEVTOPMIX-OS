import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdensDeServicoService } from './ordens-de-servico.service';
import { CreateOrdensDeServicoDto } from './dto/create-ordens-de-servico.dto';
import { UpdateOrdensDeServicoDto } from './dto/update-ordens-de-servico.dto';

@Controller('ordens-de-servico')
export class OrdensDeServicoController {
  constructor(private readonly ordensDeServicoService: OrdensDeServicoService) {}

  @Post()
  create(@Body() createOrdensDeServicoDto: CreateOrdensDeServicoDto) {
    return this.ordensDeServicoService.create(createOrdensDeServicoDto);
  }

  @Get()
  findAll() {
    return this.ordensDeServicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ordensDeServicoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateOrdensDeServicoDto: UpdateOrdensDeServicoDto) {
    return this.ordensDeServicoService.update(id, updateOrdensDeServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ordensDeServicoService.remove(id);
  }
}
