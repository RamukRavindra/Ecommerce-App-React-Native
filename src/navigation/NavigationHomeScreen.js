import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
// import DrawerHomeScreen from '../screens/DrawerHomeScreen';
import Calculator from '../screens/Calculator';

export default function NavigationHomeScreen() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="DrawerHomeScreen" component={DrawerHomeScreen} /> */}
            <Stack.Screen name="Calculator" component={Calculator} />
        </Stack.Navigator>
    )
}