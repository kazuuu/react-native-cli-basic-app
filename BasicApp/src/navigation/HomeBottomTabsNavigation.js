import React from 'react';
import { Text} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator, AccountStackNavigator } from './StackNavigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default () => {
    const BottomTab = createBottomTabNavigator();

    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                unmountOnBlur: true,
                tabBarShowLabel: false,
                tabBarStyle: { height: 50 },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <BottomTab.Screen 
                name="HomeTab" 
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='home'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                                Home
                            </Text>
                        </>
                    )
                }}            
            />
            <BottomTab.Screen
                name="AccountTab"
                component={AccountStackNavigator} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='account'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                                Account
                            </Text>
                        </>
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}