import {ReactNode, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  title?: string;
  disabled?: boolean;
  bgColor?: string;
  titleColor?: string;
  lefIcon?: ReactNode;
  rightIcon?: ReactNode;
  width?: number;
  onClick?: () => void;
  icon?: ReactNode;
};

export function Button({
  title,
  onClick,
  lefIcon,
  rightIcon,
  titleColor,
  width,
  bgColor,
  icon,
}: Props) {
  const handleClick = useCallback(() => {
    if (typeof onClick === 'function') {
      onClick();
    }
  }, [onClick]);

  const styles = StyleSheet.create({
    button: {
      backgroundColor: bgColor || '#ffB841',
      borderRadius: 5,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      elevation: 1,
      width,
      padding: 8,
    },
    lefIcon: {},
    rightIcon: {},
    title: {
      fontSize: 16,
      color: titleColor || '#fff',
      fontWeight: '700',
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <View style={styles.lefIcon}>{lefIcon}</View>
      {icon ? icon : <Text style={styles.title}>{title}</Text>}
      <View style={styles.rightIcon}>{rightIcon}</View>
    </TouchableOpacity>
  );
}
