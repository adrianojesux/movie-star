import {LoggerModule} from './modules/sentry-logger';

export const Logger = {
  log: (...args: any) => {
    if (__DEV__) {
      console.log(...args);
    }
    LoggerModule.log(JSON.stringify(args));
  },

  error: (...args: any) => {
    if (__DEV__) {
      console.error(...args);
    }
    LoggerModule.error('ERROR ::', args);
  },
};
