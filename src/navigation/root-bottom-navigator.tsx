import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootBottomParams} from './types';
import {HomeScreen} from '@features/home/home-screen';
import {SearchScreen} from '@features/search/search-screen';
import {FavoritiesScreen} from '@features/favorities/favorities-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {screenOptions} from './screen-options';
import {MaterialIcons, Octicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator<RootBottomParams>();

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#222',
  },
});

export function RootBottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabbar,
      }}>
      <Tab.Screen
        name="home"
        options={{
          tabBarIcon: ({focused}) => (
            <Octicons name="home" size={focused ? 24 : 18} color="#fff" />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="favorites"
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="favorite-border"
              size={focused ? 28 : 22}
              color="#fff"
            />
          ),
        }}
        component={FavoritiesScreen}
      />
      <Tab.Screen
        name="search"
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="search"
              size={focused ? 28 : 22}
              color="#fff"
            />
          ),
        }}
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
}
