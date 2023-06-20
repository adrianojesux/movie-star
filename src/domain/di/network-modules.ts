import {Newtwork} from '@domain/network';
import {DependencyContainer, module, ReactjectModule} from 'reactject';

@module()
export class NetworkModule extends ReactjectModule {
  register(container: DependencyContainer) {
    super.register(container);

    container.registerSingleton(Newtwork);
  }
}
