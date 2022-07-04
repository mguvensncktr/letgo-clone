import { View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import MessageItem from '../../components/MessageItem'
import { Message } from '../../types'
import messagesData from '../../../assets/messages'

const MessageScreen = () => {

    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        setMessages(messagesData)
        return () => {
            setMessages([])
        }
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => <MessageItem message={item} />}
            />
        </View>
    )
}

export default MessageScreen