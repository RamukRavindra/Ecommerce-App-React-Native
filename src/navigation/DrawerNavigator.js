import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='MainTabs' component={TabNavigator} options={{ headerShown: true }} />
            <Drawer.Screen name='ProfileScreen' component={ProfileScreen} />
        </Drawer.Navigator>
    )
}