import {useCallback} from 'react';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type Props = {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({title, onClick}: Props) {
  const handleClick = useCallback(() => {
    if (typeof onClick === 'function') {
      onClick();
    }
  }, [onClick]);

  return (
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffB841',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
});
