import React from 'react';
import { Text} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator, MessageStackNavigator, AccountStackNavigator } from './StackNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
                            <MaterialCommunityIcons
                                name='home'
                                size={20}
                                color={focused ? '#ee125a' : '#91A2AD'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#ee125a' : '#91A2AD',
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
                name="MessageTab"
                component={MessageStackNavigator} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <MaterialCommunityIcons
                                name='message'
                                size={20}
                                color={focused ? '#ee125a' : '#91A2AD'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#ee125a' : '#91A2AD',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                                Message
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
                            <MaterialCommunityIcons
                                name='account'
                                size={20}
                                color={focused ? '#ee125a' : '#91A2AD'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#ee125a' : '#91A2AD',
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