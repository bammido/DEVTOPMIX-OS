import { Test, TestingModule } from '@nestjs/testing';
import { OrdensDeServicoController } from './ordens-de-servico.controller';
import { OrdensDeServicoService } from './ordens-de-servico.service';

describe('OrdensDeServicoController', () => {
  let controller: OrdensDeServicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdensDeServicoController],
      providers: [OrdensDeServicoService],
    }).compile();

    controller = module.get<OrdensDeServicoController>(OrdensDeServicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
