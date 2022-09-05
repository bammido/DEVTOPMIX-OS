import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrdensDeServicoDto } from './dto/create-ordens-de-servico.dto';
import { UpdateOrdensDeServicoDto } from './dto/update-ordens-de-servico.dto';
import { OrdemDeServico } from './entities/ordens-de-servico.entity';

@Injectable()
export class OrdensDeServicoService {

  constructor( 
    @InjectModel(OrdemDeServico)
    private OrdemDeServicoModel: typeof OrdemDeServico ){}

  create(createOrdensDeServicoDto: CreateOrdensDeServicoDto) {
    return this.OrdemDeServicoModel.create( createOrdensDeServicoDto as any ) ;
  }

  findAll() {
    return this.OrdemDeServicoModel.findAll();
  }

  findOne(id: number): Promise<OrdemDeServico> {
    return this.OrdemDeServicoModel.findOne({
      where: {
        id,
      },
    });
  }


  findSome(limit: number) {
    return this.OrdemDeServicoModel.findAll()
  }

  update(id: number, updateOrdensDeServicoDto: UpdateOrdensDeServicoDto) {
    return `This action updates a #${id} ordensDeServico`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordensDeServico`;
  }
}
