import { Image, View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import Swiper from 'react-native-swiper'
import { useRouter } from 'expo-router';

import styles from '@/constants/styles';

const Square = ({ selected }: { selected: boolean }) => {
  const backgroundColor = selected ? '#6C63FF' : '#B6B6D8'; // Example colors for selected and unselected dots
  return (
    <View
      style={{
        width: selected ? 20 : 10,
        height: 10,
        marginHorizontal: 3,
        borderRadius: 5,
        backgroundColor,
      }}
    />
  );
};

const CustomButton = ({ title, onPress, style, dark, long }: { title: string; onPress?: () => void; style?: any; dark?: boolean; long?: boolean }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={[dark ? styles.darkBtnText : styles.lightBtnText, long ? styles.longBtn : null]}>{title}</Text>
  </TouchableOpacity>
);

export const Stepper = () => {
  const router = useRouter();
  const swiperRef = useRef<Swiper>(null);

  const goToNextSlide = () => {
    swiperRef.current?.scrollBy(1, true); // Move to the next slide
  };

  
  return (
    <Swiper 
      ref={swiperRef}
      showsButtons={false}
      showsPagination = {false}
      autoplay={false}
      scrollEnabled = {false}
      loop={false}>
        <View key='1' style={styles.pageContent}>
          <Image style={styles.carouselImg} source={require('@/assets/images/step1.png')} />
          <Text style={styles.pageTitle}>Save money, {'\n'}track with ease</Text>
          <Text style={styles.pageSubtitle}>Have all your finances in one place!</Text>
          <View style={styles.buttonContainer}>
            <CustomButton title="Skip" onPress={() => router.push('home')} style={styles.lightBtn} />
            <CustomButton title="Next" onPress={ goToNextSlide } style={styles.darkBtn} dark />
          </View>
        </View>
        
        <View key='2' style={styles.pageContent}>
          <Image style={styles.carouselImg} source={require('@/assets/images/step2.png')} />
          <Text style={styles.pageTitle}>Stay organized, {'\n'}manage simply</Text>
          <Text style={styles.pageSubtitle}>Manage your money and {'\n'}invest with just one tap</Text>
          <View style={styles.buttonContainer}>
            <CustomButton title="Skip" onPress={() => router.push('home')} style={styles.lightBtn} />
            <CustomButton title="Next" onPress={ goToNextSlide } style={styles.darkBtn} dark />
          </View>
        </View>

        <View key='3' style={styles.pageContent}>
          <Image style={styles.carouselImg} source={require('@/assets/images/step3.png')} />
          <Text style={styles.pageTitle}>Smart tools {'\n'}for smart saving</Text>
          <Text style={styles.pageSubtitle}>Reach your financial goal</Text>
          <View style={styles.buttonContainer}>
            <CustomButton title="Get Started" onPress={() => router.push('home')} style={styles.longBtn} dark />
          </View>
        </View>
      </Swiper>
  );
};
