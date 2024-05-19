import React from 'react';
import { Icon } from '@rneui/base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthStack, HomeStack, MapStack,EmergencyPhoneStack} from './index';
import { LogInScreen, RegisterScreen, ForgotPasswordScreen } from '../screens';

import { screenName } from '../utilities'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function MainStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screenName.account.login} component={LogInScreen} />
            <Stack.Screen name={screenName.account.register} component={RegisterScreen} />
            <Stack.Screen name={screenName.account.forgotPassword} component={ForgotPasswordScreen} />
        </Stack.Navigator>
    );
}


export function AppNavigation() {
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
                options={{ title: 'Inicio' }} />
            <Tab.Screen
                name={screenName.map.tab}
                component={MapStack}
                options={{ title: 'Mapa' }} />
            <Tab.Screen
                name={screenName.phoneNumbers.tab}
                component={EmergencyPhoneStack}
                options={{ title: 'Teléfonos de emergencia' }} />
        </Tab.Navigator>
    );

    function tabBarIconOptions(route, color, size) {
        let iconName;
        if (route.name === screenName.home.tab) {
            iconName = 'home';
        }
        if (route.name === screenName.map.tab) {
            iconName = 'map';
        }
        if (route.name === screenName.phoneNumbers.tab) {
            iconName = 'phone';
        }
        return <Icon
            type="material-community"
            name={iconName}
            size={size}
            color={color}
        />;
    }
} 