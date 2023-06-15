import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchStackParams} from './types';
import {MovieDetailScreen} from '@features/movie-detail/movie-detail-screen';
import {screenOptions} from './screen-options';
import {SearchScreen} from '@features/search/search-screen';

const Stack = createNativeStackNavigator<SearchStackParams>();

export function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="search">
      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={({navigation}) =>
          screenOptions({headerTitle: 'Search', navigation})
        }
      />
      <Stack.Screen name="detail" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
}
