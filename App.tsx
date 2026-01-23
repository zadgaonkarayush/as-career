import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  useEffect(() => {
    // Keep splash screen visible
    SplashScreen.preventAutoHideAsync();

    // Hide splash screen after 2 seconds
    const timeout = setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer> 
  );
}
