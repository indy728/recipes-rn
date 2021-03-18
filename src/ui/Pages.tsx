import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

export const Page: React.FC = () => <View style={styles.pageContainer} />
export const ScrollPage: React.FC = () => <View style={styles.pageContainer} />

const styles = StyleSheet.create({
  pageContainer: {
    height: '100%'
  }
})