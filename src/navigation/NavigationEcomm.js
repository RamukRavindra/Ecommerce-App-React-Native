import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ProductInfo from '../screens/ProductInfo';
import MyCart from '../screens/MyCart';

export default function NavigationEcomm() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrawerHomeScreen" component={HomeScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductInfo" component={ProductInfo} />
            <Stack.Screen name="MyCart" component={MyCart} />
        </Stack.Navigator>
    )
}