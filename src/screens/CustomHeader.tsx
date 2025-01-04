import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '@/constants/styles';

export const CustomHeader = ({ title, onPress, rightElement }: any) => {
 

  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={() => onPress && onPress()}>
        <Text style={styles.content}>{ title === "Home" ? "" : 'Back' }</Text>
      </TouchableOpacity>

      <Text style={styles.content}>
        { title === "Home" ? "" : title }
      </Text>

      <TouchableOpacity onPress={() => onPress && onPress()}>
        <Text style={styles.content}>
          {title === "Home" ? "" : rightElement}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
