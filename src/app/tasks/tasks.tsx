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

import CircularProgress from 'react-native-circular-progress-indicator';


const MiniCardInfo = ({split, chart} : {split?:boolean, chart?:boolean}) => (
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
		{chart ? (
			<Column>
				<View style={styles.rewardMiniCardRow}>
				<ProfileIconsContainer count={4}>
					<ProfileIcons img={require('@/assets/images/profile.png')} className={styles.rewardImg} />
					<ProfileIcons img={require('@/assets/images/profile.png')} className={styles.rewardImg} />
				</ProfileIconsContainer>
				</View>

				<View style={styles.rewardMiniCardRow}>
				<RewardDate date={'SAT, 14 DEC'} />
				</View>
			</Column>
		) : (
			<>
			<View style={styles.rewardMiniCardRow}>
				<ProfileIconsContainer count={4}>
					<ProfileIcons img={require('@/assets/images/profile.png')} className={styles.rewardImg} />
					<ProfileIcons img={require('@/assets/images/profile.png')} className={styles.rewardImg} />
				</ProfileIconsContainer>
				</View>

				<View style={styles.rewardMiniCardRow}>
					<RewardDate date={'SAT, 14 DEC'} />
				</View>
			</>
		)}


		<Column>
			{chart && (
				<View stlye={styles.progressContainer} >
					<CircularProgress 
						value={75}
						inActiveStrokeColor={'#CDD9E3'}
						inActiveStrokeOpacity={0.3}
						progressValueColor={'black'}
						activeStrokeWidth={15}
						activeStrokeColor={'#277AD9'}
						inActiveStrokeWidth={15}
						valueSuffix={'%'}
						showProgressValue={false}
						/> 

						<View style={styles.textContainer}>
							<Text style={styles.textValue}>
								75<Text style={styles.textSuffix}>%</Text>
							</Text>
						</View>
				</View>
			)}
		</Column>
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
		
			<Row>
				<View style={styles.taskHeader}>
					<Text style={styles.cardHeaderTextWhite}>Tasks Overview</Text>
					<Text style={styles.cardSubTextWhite}>5 Tasks Pending</Text>
				</View>

				<View style={styles.addButton}>
					<TextLink type={'button'} className={styles.linkButton} icon={<Ionicons name="add-outline" size={28} color={'#fff'}/>} url={'/tasks/create'} />
				</View>
			</Row>

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
					<MiniCardInfo split chart/>
				</RewardMiniCard>
			</Row>

			<Row>
				<RewardMiniCard>
					<MiniCardInfo split chart/>
				</RewardMiniCard>
			</Row>
             
          </View>
          
        </>
      }
    />
  );
}
