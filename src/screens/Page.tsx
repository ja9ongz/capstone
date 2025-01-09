import React from 'react';
import { View, ImageBackground, ScrollView, SafeAreaView } from 'react-native';

import { CustomHeader } from './CustomHeader';
import styles from '@/constants/styles';
import { FontsLoader } from '../components/Fonts';

export const Page = ({ title, content, backurl}: {title?:any, content?:any, backurl?:any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FontsLoader>
        <ImageBackground
          source={require('@/assets/images/background.png')}
          style={styles.imageBackground}
        >
          {/* Custom Header */}
          <CustomHeader title={title} url={backurl}/>

          {/* Scrollable Content */}
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            <View style={styles.page}>
              {content}
            </View>
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}></View>
        </ImageBackground>
      </FontsLoader>
    </SafeAreaView>
  );
};


