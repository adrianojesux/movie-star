import {init, track} from '@amplitude/analytics-react-native';
import Config from 'react-native-config';

export function createInstance() {
  init(Config.AMPLITUDE_API_KEY, undefined);
}

export function trackScreen(
  screenName: string,
  customParams?: Record<string, any>
) {
  track(screenName, {...customParams});
}
