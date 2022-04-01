import { woboLogger } from './wobo-logger';

describe('Logger', () => {
  it('should call the logger', () => {
    const logger = woboLogger;
    expect(logger).toBeTruthy();
  });
});
