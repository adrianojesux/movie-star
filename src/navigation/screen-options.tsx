import React from 'react';
import {Pressable} from 'react-native';

import {Ionicons} from '@expo/vector-icons';
import {isIOS} from '@domain/utilities';

type Props = {
  navigation: any;
  headerTitle: string;
};

export const screenOptions = ({navigation, headerTitle}: Props) =>
  ({
    headerShown: true,
    headerTitle: headerTitle,
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTransparent: isIOS,
    headerBlurEffect: 'dark',
    headerStyle: {
      backgroundColor: '#2A2F4F',
    },
    headerTitleStyle: {
      fontSize: 16,
    },
    headerLeft: () => (
      <Pressable onPress={navigation.goBack}>
        <Ionicons name="close" color="#fff" size={28} />
      </Pressable>
    ),
  } as {});
