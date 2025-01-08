import React from 'react';
import { View } from 'react-native';
import styles from '@/constants/styles';

export const Row = ({ children }) => {
  return (
    <View style={styles.row}>
      {children} 
    </View>
  );
};

export const Column = ({ children }) => {
  return (
    <View style={styles.column}>
      {children} 
    </View>
  );
};
