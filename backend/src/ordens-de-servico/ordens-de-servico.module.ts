import { Module } from '@nestjs/common';
import { OrdensDeServicoService } from './ordens-de-servico.service';
import { OrdensDeServicoController } from './ordens-de-servico.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrdemDeServico } from './entities/ordens-de-servico.entity';

@Module({
  imports: [SequelizeModule.forFeature([OrdemDeServico])],
  controllers: [OrdensDeServicoController],
  providers: [OrdensDeServicoService]
})
export class OrdensDeServicoModule {}
