import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateColaboradoreDto } from './dto/create-colaboradore.dto';
import { UpdateColaboradoreDto } from './dto/update-colaboradore.dto';
import { Colaborador } from './entities/colaborador.entity';

@Injectable()
export class ColaboradoresService {

constructor(
  @InjectModel(Colaborador)
  private ColaboradorModel: typeof Colaborador
){}

  create(createColaboradoreDto: CreateColaboradoreDto) {
    return this.ColaboradorModel.create(createColaboradoreDto as any);
  }

  findAll(): Promise<Colaborador[]>  {
    return this.ColaboradorModel.findAll();
  }

  findOne(id: number): Promise<Colaborador> {
    return this.ColaboradorModel.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateColaboradoreDto: UpdateColaboradoreDto) {
    return `This action updates a #${id} colaboradore`;
  }

  remove(id: number) {
    return `This action removes a #${id} colaboradore`;
  }
}
