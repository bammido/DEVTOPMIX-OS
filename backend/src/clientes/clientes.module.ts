import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cliente } from './entities/cliente.entity';

@Module({
  imports: [SequelizeModule.forFeature([Cliente])],
  controllers: [ClientesController],
  providers: [ClientesService]
})
export class ClientesModule {}
