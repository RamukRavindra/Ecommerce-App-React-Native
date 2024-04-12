import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationHomeScreen from './src/navigation/NavigationHomeScreen';

export default function App() {

  return (
    <NavigationContainer>
      <NavigationHomeScreen />
    </NavigationContainer>
  )
}