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

export default function RewardsPage() {
  return (
    <Page
      title="Rewards"
      content={
        <>
          <View style={styles.container}>
            <ProfileRow img={require('@/assets/images/profile.png')} name={'Randolf Wesely'} />
            <RewardsRow savertype={'Gold Saver'} rewardsAmt={'2 Rewards'}/>

            <RewardCard>
                <Text style={styles.cardHeaderText}>Current Tasks</Text>
                <Row>
					<RewardMiniCard>
						<MiniCardInfo/>
					</RewardMiniCard>
                </Row>
				
				<Text style={styles.cardHeaderText}>Redeem Your Rewards</Text>
                <Row>
					<RewardMiniCard small>
						<MiniCardInfo split/>
					</RewardMiniCard>

					<RewardMiniCard small>
						<MiniCardInfo split/>
					</RewardMiniCard>
                </Row>
				
				<TextLink title={'View All Rewards'} icon={<Ionicons name="chevron-forward-outline" size={20}/>} url={'https://www.google.com'} />
            </RewardCard>
          </View>
          
        </>
      }
    />
  );
}
