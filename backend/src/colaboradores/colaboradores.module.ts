import { Module } from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { ColaboradoresController } from './colaboradores.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Colaboradore } from './entities/colaboradore.entity';

@Module({
  imports: [SequelizeModule.forFeature([Colaboradore])],
  controllers: [ColaboradoresController],
  providers: [ColaboradoresService]
})
export class ColaboradoresModule {}
