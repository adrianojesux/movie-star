import {SentryLogger} from './modules/sentry-logger';

export const Logger = {
  log: (...args: any) => {
    if (__DEV__) {
      console.log(...args);
    }
    SentryLogger.log(JSON.stringify(args));
  },

  error: (...args: any) => {
    if (__DEV__) {
      console.error(...args);
    }
    SentryLogger.error('ERROR ::', args);
  },
};
