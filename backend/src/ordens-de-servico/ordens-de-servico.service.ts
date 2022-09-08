import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrdensDeServicoDto } from './dto/create-ordens-de-servico.dto';
import { UpdateOrdensDeServicoDto } from './dto/update-ordens-de-servico.dto';
import { OrdensDeServico } from './entities/ordens-de-servico.entity';

@Injectable()
export class OrdensDeServicoService {

  constructor(
    @InjectModel(OrdensDeServico)
    private OrdensDeServicoModel: typeof OrdensDeServico
  ){}
  
  async create(createOrdensDeServicoDto: CreateOrdensDeServicoDto, id: string) {
    const newOrdensDeServico = await this.OrdensDeServicoModel.create({...createOrdensDeServicoDto, id})
    return newOrdensDeServico;
  }

  findAll() {
    return this.OrdensDeServicoModel.findAll();
  }

  findByColaborador(colaborador: string) {
    const ordemDeServico = this.OrdensDeServicoModel.findAll({
      where: {
        colaborador
      }
    })
    return ;
  }

  findOne(id: string) {
    return `This action returns a #${id} ordensDeServico`;
  }

  update(id: string, updateOrdensDeServicoDto: UpdateOrdensDeServicoDto) {
    return `This action updates a #${id} ordensDeServico`;
  }

  remove(id: string) {
    return `This action removes a #${id} ordensDeServico`;
  }
}
