import {TrackingScreen} from '@domain/analytics/tracking';
import {AppContainer} from '@ui/app-container';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function MovieDetailScreen() {
  return (
    <TrackingScreen screenName="MOVIE_DETAIL_SCREEN">
      <AppContainer>
        <View>
          <Text>Movie Detais</Text>
        </View>
      </AppContainer>
    </TrackingScreen>
  );
}
