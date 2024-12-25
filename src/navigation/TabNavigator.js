import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackNavigator from './StackNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='HomeStack' component={StackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name='ProfileScreen' component={ProfileScreen} />
            <Tab.Screen name='SettingScreen' component={SettingScreen} />
        </Tab.Navigator>
    )
}