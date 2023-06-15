import {TrackingScreen} from '@domain/analytics/tracking';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function FavoritiesScreen() {
  return (
    <TrackingScreen screenName="FAVORITIES_MOVIE_SCREEN">
      <SafeAreaView style={{flex: 1}}>
        <Text>Meu Filmes Favoritos</Text>
      </SafeAreaView>
    </TrackingScreen>
  );
}
