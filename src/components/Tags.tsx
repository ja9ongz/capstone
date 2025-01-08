import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import styles from '@/constants/styles';

export const Tags = ({ className, text, marginClass}: { className?:any, text?:any, marginClass?:any}) => {
  return (
      <View style={[className, marginClass]}>
         <Text style={className}>
          {text}
         </Text>
      </View>
    );
};
