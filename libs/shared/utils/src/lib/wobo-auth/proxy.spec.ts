import { WoboProxyInstance } from '@workboard/auth-proxy';
import { startAuthServer } from './proxy';

describe('Wobo Auth', () => {
  jest.spyOn(WoboProxyInstance, 'start');

  it('should implement WoboProxyInstance', () => {
    startAuthServer();
    expect(WoboProxyInstance.start).toHaveBeenCalled();
  });
});
