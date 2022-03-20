import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OneScreen from '../screens/OneScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';
import HomeBottomTabsNavigator from './HomeBottomTabsNavigation';

const Stack = createNativeStackNavigator();

export default (props) => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeBottomTabsNavigator} />
        </Stack.Navigator>
    )
}

export const HomeStackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="One" component={OneScreen} />
        </Stack.Navigator>
    )
}

export const MessageStackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Message">
            <Stack.Screen name="Message" component={MessageScreen} />
            <Stack.Screen name="One" component={OneScreen} />
        </Stack.Navigator>
    )
}

export const AccountStackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Account">
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="One" component={OneScreen} />
        </Stack.Navigator>
    )
}


