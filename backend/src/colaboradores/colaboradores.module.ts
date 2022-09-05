import { Module } from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { ColaboradoresController } from './colaboradores.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Colaborador } from './entities/colaborador.entity';

@Module({
  imports: [SequelizeModule.forFeature([Colaborador,])],
  controllers: [ColaboradoresController],
  providers: [ColaboradoresService]
})
export class ColaboradoresModule {}
