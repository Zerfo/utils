/**
 * @jest-environment jsdom
 */

import getUserPlatform from './getUserPlatform';

import { Platform } from '../typings/types';

describe('utils/getUserPlatform', () => {
  it('should return Browser when no mobile device is detected', () => {
    Object.defineProperty(window.navigator, 'userAgent', { value: 'Not a mobile browser', writable: true });

    const result = getUserPlatform();

    expect(result).toEqual(Platform.Browser);
  });

  it('should return Mobile when userAgent contains Mobile and not iOS or Android', () => {
    Object.defineProperty(window.navigator, 'userAgent', { value: 'Mobile/', writable: true });

    const result = getUserPlatform();

    expect(result).toEqual(Platform.Mobile);
  });

  it('should return MobileAndroid when userAgent contains Android', () => {
    Object.defineProperty(window.navigator, 'userAgent', { value: 'Mobile/Android', writable: true });

    const result = getUserPlatform();

    expect(result).toEqual(Platform.MobileAndroid);
  });

  it('should return MobileIos when userAgent contains iOS', () => {
    Object.defineProperty(window.navigator, 'userAgent', { value: 'Mobile/iOS', writable: true });

    const result = getUserPlatform();

    expect(result).toEqual(Platform.MobileIos);
  });
});
