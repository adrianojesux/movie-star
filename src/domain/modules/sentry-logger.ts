import {NativeModules} from 'react-native';
import {ILogger} from './type';

const LoggerModule: ILogger = NativeModules.LoggerModule;

export {LoggerModule};
