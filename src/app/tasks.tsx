import React from 'react';
import { Page } from '@/screens/Page';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from '@/constants/styles';
import { Card } from '@/components/Cards';
import { Column, Row } from '@/components/Row';
import { Graph } from '@/components/Graph';
import { Tags } from '@/components/Tags';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ProfileIcons, ProfileRow, ProfileIconsContainer } from '@/components/Profile';
import { TextLink } from '@/components/Link';
import { RewardCard, RewardMiniCard, RewardsRow, RewardDate } from '@/components/RewardCardItem';


const MiniCardInfo = ({split} : {split?:boolean}) => (
	<>
	{!split && (
      <View style={styles.rewardMiniCardRow}>
        <Text style={styles.rewardTag}>Get 500 Points</Text>
      </View>
    )}
	
	<View style={styles.rewardMiniCardRow}>
	<Tags className={styles.purpleTag} text={ 'Setting Goals'} marginClass={styles.addRightMargin}/>
	<Tags className={styles.blueTag} text={ 'Saving Regularly'} marginClass={styles.addRightMargin}/>
	</View>
	
	<View style={styles.rewardMiniCardRow}>
	<Text style={styles.headerText}>Save for a Toy</Text>
	<Text style={styles.miniCardSubText}>Learn how to save money for something you want.</Text>
	</View>
	
	<View style={styles.rewardMiniCardRow}>
	<ProfileIconsContainer count={4}>
	<ProfileIcons img={require('@/assets/images/profile.png')} className={styles.rewardImg} />
	<ProfileIcons img={require('@/assets/images/profile.png')} className={styles.rewardImg}/>
	</ProfileIconsContainer>
	</View>
	
	<View style={styles.rewardMiniCardRow}>
	<RewardDate date={'SAT, 14 DEC 2024'} />
	</View>
	</>
);

export default function TasksPage() {
  return (
    <Page
      title="Tasks"
      content={
        <>
          <View style={styles.container}>
            <ProfileRow img={require('@/assets/images/profile.png')} name={'Randolf Wesely'} />

			<View>
				<Text style={styles.cardHeaderText}>Tasks Overview</Text>
				<Text style={styles.cardSubText}>5 Tasks Pending</Text>
			</View>

			<Row>
				<RewardMiniCard small>
					<MiniCardInfo split/>
				</RewardMiniCard>

				<RewardMiniCard small>
					<MiniCardInfo split/>
				</RewardMiniCard>
			</Row>

			<Text style={styles.cardHeaderText}>Tasks Details</Text>
			<Row>
				<RewardMiniCard>
					<MiniCardInfo split/>
				</RewardMiniCard>
			</Row>

			<Row>
				<RewardMiniCard>
					<MiniCardInfo split/>
				</RewardMiniCard>
			</Row>
             
          </View>
          
        </>
      }
    />
  );
}
