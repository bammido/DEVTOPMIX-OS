import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateColaboradoreDto } from './dto/create-colaboradore.dto';
import { UpdateColaboradoreDto } from './dto/update-colaboradore.dto';
import { Colaboradore } from './entities/colaboradore.entity';


@Injectable()
export class ColaboradoresService {
constructor(
@InjectModel(Colaboradore)
private ColaboradorModel: typeof Colaboradore
){}

  create(createColaboradoreDto, id: string) {
    const newColaborador = {...createColaboradoreDto, id}
    return this.ColaboradorModel.create(newColaborador);
  }

  findAll() {
    return this.ColaboradorModel.findAll();
  }

  findOne(id: string) {
    return this.ColaboradorModel.findOne({
      where: {
        id
      }
    });
  }

  findByEmail(email:string) {
    return this.ColaboradorModel.findOne({
      where: {
        email
      }
    })
  }

  async verifyIsSignUp(email: string){
    const colaborador = await this.ColaboradorModel.findOne({
      where: {
        email
      }
    })

    return colaborador?.nome? true : false

  }

  async login(email: string, senha: string) {
    const colaborador = await this.ColaboradorModel.findOne({
      where: {
        email,
        senha
      }
    })
    return colaborador
  }

  update(id: string, updateColaboradoreDto: UpdateColaboradoreDto) {
    return `This action updates a #${id} colaboradore`;
  }

  remove(id: string) {
    return this.ColaboradorModel.destroy({
      where: {
        id
      }
    });
  }
}
