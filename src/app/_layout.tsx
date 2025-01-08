
import { Stack } from 'expo-router';

//const Stack = createNativeStackNavigator ();

export default function RootLayout() {
  return (
      <Stack initialRouteName="splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" />
        <Stack.Screen name="stepper" />
        <Stack.Screen name="home" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
}
