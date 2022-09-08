import { Module } from '@nestjs/common';
import { OrdensDeServicoService } from './ordens-de-servico.service';
import { OrdensDeServicoController } from './ordens-de-servico.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrdensDeServico } from './entities/ordens-de-servico.entity';
import { ColaboradoresService } from 'src/colaboradores/colaboradores.service';
import { ClientesService } from 'src/clientes/clientes.service';

@Module({
  imports: [SequelizeModule.forFeature([OrdensDeServico])],
  controllers: [OrdensDeServicoController],
  providers: [OrdensDeServicoService]
})
export class OrdensDeServicoModule {}
