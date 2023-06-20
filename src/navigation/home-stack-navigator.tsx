import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParams} from './types';
import {MovieDetailScreen} from '@features/movie-detail/movie-detail-screen';
import {screenOptions} from './screen-options';
import {HomeScreen} from '@features/home/home-screen';

const Stack = createNativeStackNavigator<HomeStackParams>();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Group>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'containedModal'}}>
        <Stack.Screen
          name="detail"
          component={MovieDetailScreen}
          options={({navigation}) =>
            screenOptions({headerTitle: 'Detalhes', navigation})
          }
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
