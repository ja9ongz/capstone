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
import { Inputs } from '@/components/Inputs';

const FieldsSummry = () => (
	<>
	<Inputs
			title="Assigned To"
			fieldType="select"
			required={true}
			options={['Apple', 'Banana', 'Orange', 'Grapes']}
			/>

	<Inputs title="Task Name" fieldType="text" required={true} placeholder='Needs vs. Wants' />
	<Inputs title="Reward" fieldType="number" required={true} placeholder='50' />
	<Inputs title="Details" fieldType="textarea" required={true} placeholder='Understand the difference between needs and wants.'  />
	<Inputs title="Tags" fieldType="text" required={true} placeholder='Critical thinking, Financial priorities' />
	<Inputs title="Duration" fieldType="slider" required={true} min={1} max={30}step={1} />
	<Inputs title="Approved?" fieldType="toggle" required={true} />
	<TextLink type={'button'} className={styles.purpleBtn} title={'Create Task'} url={'/tasks/create'} />
	</>
)

export default function CreateTasksPage() {
  return (
    <Page
      title="Task Creation"
	  backurl={'/tasks/tasks'}
      content={
        <>
        	<View style={styles.container}>
				<RewardCard>
					<FieldsSummry />
				</RewardCard>
        	</View>
        </>
      }
    />
  );
}
