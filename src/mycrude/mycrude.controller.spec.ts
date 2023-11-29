import { Test, TestingModule } from '@nestjs/testing';
import { MycrudeController } from './mycrude.controller';
import { MycrudeService } from './mycrude.service';

describe('MycrudeController', () => {
  let controller: MycrudeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MycrudeController],
      providers: [MycrudeService],
    }).compile();

    controller = module.get<MycrudeController>(MycrudeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
