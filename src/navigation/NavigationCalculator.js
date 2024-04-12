import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Calculator from '../screens/Calculator';

export default function NavigationCalculator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Calculator" component={Calculator} />
        </Stack.Navigator>
    )
}