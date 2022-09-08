import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {

constructor(
  @InjectModel(Cliente)
  private ClienteModel: typeof Cliente
){}

  async create(createClienteDto: CreateClienteDto, id: string) {
    const newCliente = await this.ClienteModel.create({...createClienteDto, id})
    return newCliente;
  }

  findAll() {
    return this.ClienteModel.findAll();
  }

  findByName(nome: string) {
    return this.ClienteModel.findOne({
      where: {
        nome
      }
    });
  }

  findOne(id: string) {
    return this.ClienteModel.findOne({
      where: {
        id
      }
    })
  }

  update(id: string, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: string) {
    return `This action removes a #${id} cliente`;
  }
}
