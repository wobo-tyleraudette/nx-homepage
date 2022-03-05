import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
  getDemo() {
    return { d: 'this is demo text' };
  }
}
