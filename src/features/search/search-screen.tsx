import {TrackingScreen} from '@domain/analytics/tracking';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function SearchScreen() {
  return (
    <TrackingScreen screenName="SEARCH_SCREEN">
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text>Search Movie</Text>
        </View>
      </SafeAreaView>
    </TrackingScreen>
  );
}
