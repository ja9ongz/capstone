import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text } from 'react-native';

import styles from '@/constants/styles';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1573FF',  // Active tab icon and label color (blue)
        tabBarInactiveTintColor: '#666',  // Inactive tab icon and label color (gray)
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' }, // Optional: customize label style
        tabBarStyle: { backgroundColor: '#fff' },  // Optional: Set background of the tab bar
      }}
    >
      <Tabs.Screen name="index" 
      options={{
        title: 'Home',
        tabBarLabelStyle: styles.tabLabel,
        tabBarStyle: styles.tabContainer,
        tabBarIcon: ({ color }) => <Ionicons style={styles.cardIcon} name="home-outline" size={22} color={color} />,
      }}
      />

      <Tabs.Screen name="rewards" 
        options={{
          title: 'Rewards',
          tabBarLabelStyle: styles.tabLabel,
          tabBarStyle: styles.tabContainer,
          tabBarIcon: ({ color }) => <Ionicons style={styles.cardIcon} name="gift-outline" size={22} color={color} />,
      }}
      />

      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tasks',
          tabBarLabelStyle: styles.tabLabel,
          tabBarIcon: ({ focused }) => (
            <View style={styles.circle}>
              <Ionicons name="add-outline" size={28} color="#FFFFFF" />
            </View>
          ),
          tabBarLabel: () => null, 
          tabBarStyle: styles.tasksTabStyle,
        }}
      />

      <Tabs.Screen name="profile" 
        options={{
          title: 'Profile',
          tabBarLabelStyle: styles.tabLabel,
          tabBarStyle: styles.tabContainer,
          tabBarIcon: ({ color }) => <Ionicons style={styles.cardIcon} name="person-add-outline" size={22} color={color} />,
      }}
      />

      <Tabs.Screen name="settings" 
        options={{
          title: 'Settings',
          tabBarLabelStyle: styles.tabLabel,
          tabBarStyle: styles.tabContainer,
          tabBarIcon: ({ color }) => <Ionicons style={styles.cardIcon} name="settings-outline" size={22} color={color} />,
      }}
      />
    </Tabs>
  );
};