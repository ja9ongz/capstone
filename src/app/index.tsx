import React from 'react';
import { Page } from '@/screens/Page';  // Import the reusable Page component
import { View, Text } from 'react-native';


import styles from '@/constants/styles';
import { Card } from '@/components/Cards';
import { Row } from '@/components/Row';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function HomePage() {
  return (
    <Page 
      title="Home" 
      content={  // Pass JSX as content directly, not as an object
        <View style={styles.page}>
          <Row>
            <Card 
              title={
                <View style={styles.row}>
                  <Ionicons style={styles.cardIcon} name="library-outline" size={18} color="#9251DB" />
                  credit score
                </View>
              } 
              description='850'
              subText='Excellent'
              style={styles.cardLeft} 
            />

            <Card 
              title={
                <View style={styles.row}>
                  <Ionicons style={styles.cardIcon} name="card-outline" size={18} color="white" />
                  Total Spent                
                </View>
              } 
              description='$1, 252'
              style={styles.cardRight} 
            />
          </Row>
        </View>
      }
    />
  );
}
