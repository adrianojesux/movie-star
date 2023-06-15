import {StyleSheet, Text, View} from 'react-native';
import {AppBarProps} from './type';

export function AppBar({title}: AppBarProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 13,
  },
});
