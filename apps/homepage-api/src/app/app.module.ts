import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from '@nestjs/axios';
import { UserModule, CoreModule } from '@nx-homepage/api';
import { AppService } from './app.service';
@Module({
  imports: [HttpModule, CoreModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
