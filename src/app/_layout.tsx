import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import SplashScreen from '@/screens/SplashScreen';
import HomeScreen from '@/app/index';
import { Stepper } from '@/screens/stepper';
import StepperPage from './stepper';



const Stack = createNativeStackNavigator ();


export default function RootLayout() {
  return (
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Stepper" component={StepperPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
}
