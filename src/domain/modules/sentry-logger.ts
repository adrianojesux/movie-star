import {NativeModules} from 'react-native';
import {ISentryLogger} from './type';

const SentryLogger: ISentryLogger = NativeModules.LoggerModule;

export {SentryLogger};
