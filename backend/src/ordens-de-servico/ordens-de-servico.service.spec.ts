import { Test, TestingModule } from '@nestjs/testing';
import { OrdensDeServicoService } from './ordens-de-servico.service';

describe('OrdensDeServicoService', () => {
  let service: OrdensDeServicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdensDeServicoService],
    }).compile();

    service = module.get<OrdensDeServicoService>(OrdensDeServicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
