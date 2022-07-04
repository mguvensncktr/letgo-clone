import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import { Message } from '../../types';

interface IMessageProps {
    message: Message
}

const MessageItem = ({ message }: IMessageProps) => {

    return (
        <TouchableOpacity
            onPress={() => console.log("Message pressed")}
        >
            <View style={styles.container}>
                <View>
                    <Image
                        source={{ uri: message?.image }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <Image
                        source={{ uri: message?.sellerImage }}
                        style={styles.ownerImage}
                        resizeMode="cover"
                    />
                    <View style={styles.verified}>
                        <AntDesign name="check" size={14} color="white" />
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{message?.productName}</Text>
                    <Text style={styles.sellerTitle}>{message?.sellerName}</Text>
                    <View style={styles.messageStatus}>
                        <AntDesign name="clockcircle" size={14} color="red" />
                        <Text style={styles.messageStatusText}>{message?.status}</Text>
                    </View>
                </View>
                <Text style={styles.date}>{message?.time}</Text>
            </View>
            <View
                style={styles.divider}
            />
        </TouchableOpacity>
    )
}

export default MessageItem