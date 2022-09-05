import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {

  constructor(
    @InjectModel(Cliente)
    private CilentesModel: typeof Cliente ){}

  create(createClienteDto: CreateClienteDto) {
    return this.CilentesModel.create( createClienteDto as any);
  }

  findAll(): Promise<Cliente[]> {
    return this.CilentesModel.findAll();
  }

  findOne(id: number): Promise<Cliente> {
    return this.CilentesModel.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
