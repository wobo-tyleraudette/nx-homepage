import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckController } from './health-check.controller';

describe('HealthCheckController', () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
    }).compile();

    controller = module.get<HealthCheckController>(HealthCheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get', () => {
    const res = controller.getHealthInfo();
    expect(res.message).toBe('Ok');
  });

  it('should post', () => {
    const res = controller.postHealthInfo({ id: 3 });
    expect(res).toBe('You posted this id: 3');
  });
});
