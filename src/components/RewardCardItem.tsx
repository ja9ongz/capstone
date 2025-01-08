import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Row } from './Row';
import styles from '@/constants/styles';

import Ionicons from '@expo/vector-icons/Ionicons';

export const RewardsRow = ({ savertype, rewardsAmt } : { savertype?:any, rewardsAmt?:any }) => {
  return(
      <View style={styles.rewardRowContainer}>
        <View style={styles.saverType}>
          <ImageBackground
            source={require('@/assets/images/tierbg.png')}
            style={styles.iconBg}
          >
          <Ionicons name="flame" size={22} color="#fff" />
          </ImageBackground>
          <Text style={styles.saverText}>{savertype}</Text>
        </View>

        <View style={styles.verticalLine} />
        
        <View style={styles.saverType}>
          <Ionicons name="ticket" style={styles.rewardIcon} size={22} color="white" /> 
          <Text style={styles.saverText}>{rewardsAmt}</Text>
        </View>
      </View>
  );
};


export const RewardCard = ({ children } : {children?:any}) => {
  return (
    <View style={styles.rewardCard}>
      {children} 
    </View>
  );
};

export const RewardMiniCard = ({ children, small } : {children?:any, small?:boolean}) => {
  return (
    <View style={[styles.rewardMiniCard, (small ? styles.rewardMiniCardSmall : null)]}>
      {children} 
    </View>
  );
};

export const RewardDate = ({ date } : {date?:any}) => {
  return (
    <>
      <Ionicons name="calendar-outline" style={styles.rewardIcon} size={18} color="#666" /> 
      <Text style={styles.rewardDate}>{date}</Text>
    </>
  );
};

