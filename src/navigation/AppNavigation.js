import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import { View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack, MapStack, ProfileStack, ChatsStack} from './index';
import { LogInScreen, RegisterScreen, ForgotPasswordScreen } from '../screens';
import { CenterButton } from '../components/atoms'

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

    const [isExpanded, setIsExpanded] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = navigation.addListener('state', (e) => {
            const currentIndex = e.data.state.index;
            if (isExpanded && currentIndex !== undefined) {
                setIsExpanded(false);
            }
        });
        return unsubscribe;
    }, [navigation, isExpanded]);

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={{ flex: 1 }}
                activeOpacity={1}
                onPress={() => setIsExpanded(false)}
            >
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
                        name={'CenterButton'}
                        component={CenterButton}
                        options={{
                            tabBarIcon: ({ }) => (
                                <View>
                                    <Icon
                                        name={isExpanded ? 'close' : 'plus'}
                                        size={30}
                                        color={'#e91e63'}
                                    />
                                </View>
                            ),
                            tabBarButton: (props) => (
                                <CenterButton
                                    {...props}
                                    iconName={isExpanded ? 'close' : 'plus'}
                                    onPress={() => setIsExpanded(!isExpanded)}
                                    isExpanded={isExpanded}
                                />
                            ),
                            listeners:
                            {
                                tabPress: (e) => {
                                    setIsExpanded(false);
                                }
                            }
                        }}
                    />
                    <Tab.Screen
                        name={screenName.chats.tab}
                        component={ChatsStack}
                        options={{ title: 'Chats' }} />
                    <Tab.Screen
                        name={screenName.profile.tab}
                        component={ProfileStack}
                        options={{ title: 'Perfil' }} />
                </Tab.Navigator>
            </TouchableOpacity>
        </View>
    );

    function tabBarIconOptions(route, color, size) {
        let iconName;
        if (route.name === screenName.home.tab) {
            iconName = 'home';
        }
        if (route.name === screenName.map.tab) {
            iconName = 'map';
        }
        if (route.name === screenName.chats.tab) {
            iconName = 'chat';
        }
        if (route.name === screenName.profile.tab) {
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

