import React, {useEffect} from 'react';
import {AppProvider} from '@providers/app-provider';
import 'react-native-gesture-handler';
import {enableFreeze, enableScreens} from 'react-native-screens';
import {RootBottomNavigator} from '@navigation/root-bottom-navigator';
import {createInstance} from '@domain/analytics/amplitude';

enableFreeze(true);
enableScreens(false);

function App(): JSX.Element {
  useEffect(() => {
    createInstance();
  }, []);

  return (
    <AppProvider>
      <RootBottomNavigator />
    </AppProvider>
  );
}

export default App;
