import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export default function ReviewSubmission() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>إرسال تقييم</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral.background,
    padding: 24,
    direction: 'rtl',
  },
  title: {
    fontFamily: 'Cairo-Bold',
    fontSize: 24,
    color: colors.neutral.foreground,
  },
});
