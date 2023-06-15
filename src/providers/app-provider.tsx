import {AppNavigationProvider} from '@navigation/app-navigation-provider';
import {ReactNode} from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export function AppProvider({children}: {children: ReactNode}) {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppNavigationProvider>
        <StatusBar animated barStyle="dark-content" />
        {children}
      </AppNavigationProvider>
    </GestureHandlerRootView>
  );
}
