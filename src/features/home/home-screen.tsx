import {TrackingScreen} from '@domain/analytics/tracking';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useResolve} from 'reactject';
import {ListMoviesUseCase} from './useCases/listMoviesUseCase';

export function HomeScreen() {
  const listMoviesUseCase = useResolve(ListMoviesUseCase);

  useEffect(() => {
    (async () => {
      const movies = await listMoviesUseCase.execute();
      console.log(movies);
    })();
  }, []);

  return (
    <TrackingScreen screenName="HOME_SCREEN">
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text style={{color: '#000000', fontSize: 14}}>Home Screen</Text>
        </View>
      </SafeAreaView>
    </TrackingScreen>
  );
}
