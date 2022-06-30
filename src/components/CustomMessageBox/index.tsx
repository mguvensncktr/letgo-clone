import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const CustomMessageBox = ({ text, onPress }: { text: string, onPress: () => void }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {text}</Text>
        </TouchableOpacity>
    )
}

export default CustomMessageBox