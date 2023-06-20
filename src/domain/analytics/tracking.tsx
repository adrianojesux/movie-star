import {useEffect} from 'react';
import {TrackingParams} from './types';
import {useIsFocused} from '@react-navigation/native';
import {trackScreen} from './amplitude';
import {Logger} from '@domain/logger';

export function TrackingScreen({
  children,
  screenName,
  customProps,
}: TrackingParams) {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      trackScreen(screenName, customProps);
      Logger.log('screenName');
    }
  }, [isFocused]);

  return <>{children}</>;
}
