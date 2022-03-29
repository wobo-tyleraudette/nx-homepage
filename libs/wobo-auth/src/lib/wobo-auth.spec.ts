import { WoboProxyInstance } from '@workboard/auth-proxy';

describe('Wobo Auth', () => {
  jest.spyOn(WoboProxyInstance, 'init');
  jest.spyOn(WoboProxyInstance, 'start');

  it('should implement WoboProxyInstance', () => {
    expect(WoboProxyInstance.init).toHaveBeenCalled();
    expect(WoboProxyInstance.start).toHaveBeenCalled();
  });
});
