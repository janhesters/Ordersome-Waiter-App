import { checkNotificationsPermission, getDeviceInfo } from './fcm';

describe('getDeviceInfo', () => {
  it('should return the device info', () => {
    expect(getDeviceInfo('123')).toEqual({
      active: true,
      device_id: 'device-id-123',
      name: 'device name (Waiter Tablet)',
      registration_id: '123',
      type: 'ios'
    });
  });
});

describe('checkNotificationsPermission', () => {
  describe('permission allowed', () => {
    it('should resolve with true', () => {
      expect.assertions(1);
      return checkNotificationsPermission().then(res => {
        expect(res).toBe(true);
      });
    });
  });
});

// TODO: Tests for the other fcm functions.
