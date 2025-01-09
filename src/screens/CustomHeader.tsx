import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

import { Row } from '@/components/Row';
import styles from '@/constants/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export const CustomHeader = ({ title, onPress, url }: any) => {
  const router = useRouter();

  const handlePress = () => {
      if (url) {
          Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
      }
  };
  
  const navigateToPage = () => {
      router.push(url)
      handlePress(); // If you have any custom logic to handle on press
  };

  return (
    <>
      <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={navigateToPage}>
              <Text>
                {title === "Home" || title === "Rewards" || title === "Tasks" || title === "Profile" || title === "Settings" ? "" : (
                  <Ionicons style={styles.cardIcon} name="arrow-back-outline" size={25} color="#fff" />
                )}
              </Text>
          </TouchableOpacity>

          <Text style={styles.headerTextWhite}>
            {title === "Home" || title === "Rewards" || title === "Tasks" || title === "Profile" || title === "Settings" ? "" : title}
          </Text>

          <Text style={styles.iconButton}></Text>
      </View>
    </>
  );
};
