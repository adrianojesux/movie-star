import {TrackingScreen} from '@domain/analytics/tracking';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function MovieDetailScreen() {
  return (
    <TrackingScreen screenName="MOVIE_DETAIL_SCREEN">
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text>Movie Detais</Text>
        </View>
      </SafeAreaView>
    </TrackingScreen>
  );
}
