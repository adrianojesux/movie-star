import {AppNavigationProvider} from '@navigation/app-navigation-provider';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactNode} from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export function AppProvider({children}: {children: ReactNode}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        staleTime: 1000 * 20, // 20 seconds
      },
    },
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <AppNavigationProvider>
          <StatusBar animated barStyle="dark-content" />
          {children}
        </AppNavigationProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
