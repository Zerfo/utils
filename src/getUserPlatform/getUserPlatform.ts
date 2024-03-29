import { Platform } from '../typings/types';

// TODO: write a checks for WebView
/**
 * Сhecks the userAgent of the user's browser and returns the platform used
 *
 * @returns {String}
 */
function getUserPlatform(): Platform {
  let platform = Platform.Browser;

  const userAgent = window?.navigator?.userAgent;

  if ((window?.navigator?.maxTouchPoints ?? !!window?.screen?.orientation) || userAgent.includes('Mobile/')) {
    if (userAgent?.match(/iOS|iPad|iPhone|ipod/)) {
      platform = Platform.MobileIos;
    } else if (userAgent?.match(/Android/)) {
      platform = Platform.MobileAndroid;
    } else {
      platform = Platform.Mobile;
    }
  }

  return platform;
}

export default getUserPlatform;
