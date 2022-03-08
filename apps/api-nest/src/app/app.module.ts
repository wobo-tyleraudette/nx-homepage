import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoService } from './demo/demo.service';
import { UserService } from './user/user.service';

const asyncModule = HttpModule.registerAsync({
  useFactory: () => ({
    timeout: 5000,
    maxRedirects: 5,
  }),
});
@Module({
  imports: [asyncModule],
  controllers: [AppController],
  providers: [AppService, DemoService, UserService],
})
export class AppModule {}
