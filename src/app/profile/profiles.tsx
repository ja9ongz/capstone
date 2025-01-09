import React from 'react';
import { Page } from '@/screens/Page';
import { View, Text } from 'react-native';
import { ProfileListItem, ProfileRow } from '@/components/Profile';
import { Row } from '@/components/Row';
import { TextLink } from '@/components/Link';
import { Card } from '@/components/Cards';
import Ionicons from '@expo/vector-icons/Ionicons';


import styles from '@/constants/styles';

const ProfileInfo = () => (
  <>

  </>
);

export default function ProfilePage() {
  return (
    <Page
      title="Profile"
      content={
        <>
          <View style={styles.container}>
              <ProfileRow img={require('@/assets/images/profile.png')} name={'Randolf Wesely'} />
              <Row>
                <View style={styles.taskHeader}>
                  <Text style={styles.cardHeaderTextWhite}>Profiles</Text>
                  <Text style={styles.cardSubTextWhite}>5 Profiles Available</Text>
                </View>

                <View style={styles.addButton}>
                  <TextLink type={'button'} className={styles.linkButton} icon={<Ionicons name="add-outline" size={28} color={'#fff'}/>} url={'/tasks/create'} />
                </View>
              </Row>

              <Row>
                <Card title={null} description=
                {
                  <>
                      <ProfileListItem img={require('@/assets/images/profile.png')} name='Joell Angiano' email='joell@email.com'/>
                      <ProfileListItem img={require('@/assets/images/profile.png')} name='Joell Angiano' email='joell@email.com'/>
                      <ProfileListItem img={require('@/assets/images/profile.png')} name='Joell Angiano' email='joell@email.com'/>
                      <ProfileListItem img={require('@/assets/images/profile.png')} name='Joell Angiano' email='joell@email.com'/>
                      <ProfileListItem img={require('@/assets/images/profile.png')} name='Joell Angiano' email='joell@email.com'/>
                  </>
                } 
                subText="" style={styles.cardWhite} />
              </Row>

          </View>
          
        </>
      }
    />
  );
}
