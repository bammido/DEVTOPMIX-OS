import { Module, NestModule, MiddlewareConsumer, RequestMethod  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { ClientesModule } from './clientes/clientes.module';
import { OrdensDeServicoModule } from './ordens-de-servico/ordens-de-servico.module';
import { VerifyAuthToken } from './middlewares/verifyAuthToken.middleware';
import { VerifyGestorAuthToken } from './middlewares/verifyGestorToken.middleware';

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
    ),
    ColaboradoresModule,
    ClientesModule,
    OrdensDeServicoModule ,
],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyAuthToken)
      .forRoutes(
        {path: 'ordens-de-servico', method: RequestMethod.POST},
        {path: 'clientes', method: RequestMethod.GET},
        {path: 'colaboradores', method: RequestMethod.GET},
        );

    consumer
      .apply(VerifyGestorAuthToken)
      .exclude({path: 'colaboradores/login', method: RequestMethod.POST})
      .forRoutes(
        {path: 'clientes', method: RequestMethod.POST},
        {path: 'colaboradores', method: RequestMethod.POST},
        {path: 'colaboradores', method: RequestMethod.POST},
        {path: 'ordens-de-servico', method: RequestMethod.GET}
        )
  }
}
