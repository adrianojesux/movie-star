import {TrackingScreen} from '@domain/analytics/tracking';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function HomeScreen() {
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
