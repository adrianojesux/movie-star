import {NetworkModule} from '@domain/di/network-modules';
import {module, ReactjectModule} from 'reactject';

@module({
  submodules: [NetworkModule],
})
export default class AppModule extends ReactjectModule {}
