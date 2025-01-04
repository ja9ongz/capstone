import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '@/constants/styles';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Stepper');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashBg}>
      <Image
        source={require('@/assets/images/olum.png')} // Replace with your image path
        style={styles.splash}
      />
    </View>
  );
}

