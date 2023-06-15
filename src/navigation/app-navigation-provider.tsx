import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {ReactNode, useRef} from 'react';

export function AppNavigationProvider({children}: {children: ReactNode}) {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();
  return (
    <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>
  );
}
