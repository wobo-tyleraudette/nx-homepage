import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoService } from './demo/demo.service';
import { UserService } from '@nx-homepage/api';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, DemoService, UserService],
})
export class AppModule {}
