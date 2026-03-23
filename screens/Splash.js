import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export default function Splash() {
  return (
    <View style={styles.container}>
      {/* App Logo Placeholder */}
      <Text style={styles.logo}>Wakili</Text>
      <Text style={styles.tagline}>العدالة في متناول يدك</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Cairo-Bold',
    fontSize: 48,
    color: colors.neutral.background,
    marginBottom: 16,
  },
  tagline: {
    fontFamily: 'Cairo-Regular',
    fontSize: 18,
    color: colors.neutral.background,
  },
});
