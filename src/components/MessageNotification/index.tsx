import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

const MessageNotification = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.leftContainer}>
                    <MaterialCommunityIcons name="message-processing" size={30} color={"#969696"} />
                    <Text style={styles.messageText}>Mesaj bildirimlerini aç</Text>
                </View>
                <Entypo name="chevron-right" size={30} color={"#969696"} />
            </View>
        </View>
    )
}

export default MessageNotification