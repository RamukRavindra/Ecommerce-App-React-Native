import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('DetailsScreen')}>
            <Text>HomeScreen</Text>
        </TouchableOpacity>
    )
}