import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdensDeServicoModule } from './ordens-de-servico/ordens-de-servico.module';
import { ClientesModule } from './clientes/clientes.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      username: 'root',
      autoLoadModels: true,
      synchronize: true,
      password: '',
      database: 'DEVTOPMIX',
      models: [],
    }
    ) ,
    OrdensDeServicoModule,
    ClientesModule,
    ColaboradoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
