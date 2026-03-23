import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export default function IconButton({ icon, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.7}>
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20, // Circular border radius for 40x40 size
    backgroundColor: colors.neutral.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
