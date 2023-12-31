import {useEffect} from 'react';
import {TrackingParams} from './types';
import {useIsFocused} from '@react-navigation/native';
import {trackScreen} from './amplitude';

export function TrackingScreen({
  children,
  screenName,
  customProps,
}: TrackingParams) {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      trackScreen(screenName, customProps);
    }
  }, [isFocused]);

  return <>{children}</>;
}
