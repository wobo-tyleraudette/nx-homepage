import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('health-check')
export class HealthCheckController {
  @Get()
  getHealthInfo() {
    const data = {
      uptime: process.uptime(),
      message: 'Ok',
      date: new Date(),
    };

    return data;
  }

  @Post('/:id')
  postHealthInfo(@Param() params) {
    return `You posted this id: ${params.id}`;
  }
}
