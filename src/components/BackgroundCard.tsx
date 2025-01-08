import React from 'react';
import { View } from 'react-native';
import styles from '@/constants/styles';

export const BackgroundCard = ({ children }) => {
  return (
    <View style={styles.backgroundCard}>
      {children} 
    </View>
  );
};

