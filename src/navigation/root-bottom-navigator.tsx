import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootBottomParams} from './types';
import {HomeScreen} from '@features/home/home-screen';
import {FavoritiesScreen} from '@features/favorities/favorities-screen';
import {StyleSheet} from 'react-native';

import {MaterialIcons, Octicons} from '@expo/vector-icons';
import {HomeStackNavigator} from './home-stack-navigator';

const Tab = createBottomTabNavigator<RootBottomParams>();

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#2A2F4F',
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
            <Octicons
              name="home"
              size={focused ? 24 : 18}
              color={focused ? '#ffB841' : '#fff'}
            />
          ),
        }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="favorites"
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="favorite-border"
              size={focused ? 28 : 22}
              color={focused ? '#ffB841' : '#fff'}
            />
          ),
        }}
        component={FavoritiesScreen}
      />
    </Tab.Navigator>
  );
}
