import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SettingScreen() {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('DetailsScreen')}>
            <Text>SettingScreen</Text>
        </TouchableOpacity>
    )
}