import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import MessageItem from '../../components/MessageItem'

const MessageScreen = () => {
    return (
        <View style={styles.container}>
            <MessageItem />
        </View>
    )
}

export default MessageScreen