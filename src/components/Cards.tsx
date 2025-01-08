import React from 'react';
import { View, Text } from 'react-native';

import styles from '@/constants/styles';

export const Card = ({ title, description, subText, style }: { title?:any; description?:any; subText?:string, style?:any }) => {
  return (
    <View style={[style === styles.cardWhite ? styles.cardWhite : styles.card, style]}>
      <Text style={style === styles.cardLeft ? styles.cardTitleLeft : styles.cardTitleRight}>{title}</Text>
      <Text style={style === styles.cardWhite? styles.cardDescription : (style === styles.cardLeft? styles.cardDescLeft : styles.cardDescRight)}>
          {description}
      </Text>
      <Text style={styles.cardSubText}>{subText}</Text>
    </View>
  );
};
