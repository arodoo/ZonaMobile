import React from 'react';
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthStack, HomeStack } from './index';
import {screenName} from '../utilities'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function MainStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screenName.account.login} component={AuthStack} />
            <Stack.Screen name={screenName.home.home} component={HomeStack} />
        </Stack.Navigator>
    );
}


export default function AppNavigation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#e91e63',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ color, size }) => tabBarIconOptions(route, color, size),
        })}>
            <Tab.Screen
                name={screenName.home.tab}
                component={HomeStack}
                options={{ title: 'Home' }} />
            <Tab.Screen
                name={screenName.account.tab}
                component={AuthStack}
                options={{ title: 'Account' }} />
        </Tab.Navigator>
    );

    function tabBarIconOptions(route, color, size) {
        let iconName;
        if (route.name === screenName.home.tab) {
            iconName = 'home';
        } 
        if (route.name === screenName.account.tab) {
            iconName = 'account';
        }
        return <Icon
        type="material-community"
        name={iconName}
        size={size}
        color={color}
        />;
    }
} 