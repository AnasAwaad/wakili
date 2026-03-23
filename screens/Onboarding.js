import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>مرحباً بك في وكيلي</Text>
      <Text style={styles.subtitle}>ابحث عن محاميك الموثوق بكل سهولة</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Cairo-Bold',
    fontSize: 28,
    color: colors.primary.default,
  },
  subtitle: {
    fontFamily: 'Cairo-Regular',
    fontSize: 16,
    color: colors.neutral.muted,
  },
});
