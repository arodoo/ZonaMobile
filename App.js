import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/navigation/AppNavigation';
//import { initFirebase } from './src/utilities/config/firebase';

export default function App() {
  //initFirebase();
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}