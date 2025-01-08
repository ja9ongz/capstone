import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import styles from '@/constants/styles';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('home')
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.splashBg}>
      <Image
        source={require('@/assets/images/olum.png')} // Replace with your image path
        style={styles.splash}
      />
    </View>
  );
}

