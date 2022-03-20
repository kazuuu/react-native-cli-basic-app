import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#ee125a',
                }
            }}
        >
            <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
                options={{
                    headerShown: false 
                }}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}