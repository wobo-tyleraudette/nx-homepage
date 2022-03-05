import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
  getDemo() {
    return { message: 'this is demo text that came from the nest api' };
  }
}

// this is mock db data
// this is a mock async api call
