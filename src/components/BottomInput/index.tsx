import { View, Text } from 'react-native'
import React from 'react'

const BottomInput = () => {
    return (
        <View style={{
            height: 60,
            width: '100%',
            backgroundColor: 'red',
            position: 'absolute',
            bottom: 0
        }}>
            <Text>BottomInput</Text>
        </View>
    )
}

export default BottomInput