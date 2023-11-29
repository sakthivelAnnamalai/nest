import { Test, TestingModule } from '@nestjs/testing';
import { MycrudeService } from './mycrude.service';

describe('MycrudeService', () => {
  let service: MycrudeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MycrudeService],
    }).compile();

    service = module.get<MycrudeService>(MycrudeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
