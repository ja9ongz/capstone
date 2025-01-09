import React from 'react';
import { Page } from '@/screens/Page';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from '@/constants/styles';
import { Card } from '@/components/Cards';
import { Column, Row } from '@/components/Row';
import { Graph } from '@/components/Graph';
import { Tags } from '@/components/Tags';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ProfileRow } from '@/components/Profile';
import { TextLink } from '@/components/Link';

export default function SettingsPage() {
  return (
    <Page
      title="Simulation Settings"
      content={
        <>
          <View style={styles.container}>
            
            <Row>
                <Card title={null} description={'settings'} subText="" style={styles.cardWhite} />
            </Row>
          </View>
          
        </>
      }
    />
  );
}
