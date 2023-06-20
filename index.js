import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import AppModule from './src/AppModule';

Reactject.start(AppModule);
AppRegistry.registerComponent(appName, () => App);
