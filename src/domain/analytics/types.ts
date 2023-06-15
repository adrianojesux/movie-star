import {ReactNode} from 'react';

export type TrackingParams = {
  children: ReactNode;
  screenName: string;
  customProps?: Record<string, any>;
};
