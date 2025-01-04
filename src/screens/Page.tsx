// Page.tsx
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { CustomHeader } from './CustomHeader';
import styles from '@/constants/styles';
import { FontsLoader } from '../components/Fonts';

import { Card } from '@/components/Cards';
import { Row } from '@/components/Row';

interface PageProps {
  title: string;
  content: string;
}

export const Page = ({ title, content }: { title: string; content?:any; }) => {
  return (
    <FontsLoader>
      <View>
        <ImageBackground
          source={require('@/assets/images/background.png')}  // Provide the image source
          style={styles.imageBackground}
        >
          {/* Use CustomHeader */}
          <CustomHeader
            title = { title } 
            onPress = { title === "Home" ? "" : () => console.log('Back pressed')}
            rightElement = {title === "Home" ? "" : "Options" }
          />

          {/* Page Content */}
          <View style={styles.page}>
              { content }
          </View>
        </ImageBackground>

      </View>
    </FontsLoader>
  );
};
