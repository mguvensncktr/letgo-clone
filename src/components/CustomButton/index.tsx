import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const CustomButton = ({ text }: { text: string }) => {
    return (
        <TouchableOpacity
            style={styles.container}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton