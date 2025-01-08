import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Row } from '@/components/Row';
import styles from '@/constants/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export const CustomHeader = ({ title, onPress }: any) => {
 

  return (
    <>
      <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => onPress && onPress()}>
            <Text>
              { (title === "Home" || "Rewards" || "Profile" || "Settings") ? "" : <Ionicons style={styles.cardIcon} name="arrow-back-outline" size={25} color="#fff" /> }
            </Text>
          </TouchableOpacity>

          <Text style={styles.headerTextWhite}>
            { (title === "Home" || "Rewards" || "Profile" || "Settings") ? "" : title }
          </Text>

          <Text style={styles.iconButton}> </Text>
      </View>
    </>
  );
};
