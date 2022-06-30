import { View, FlatList, TextInput, TouchableOpacity, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomMessageBox from '../CustomMessageBox'
import styles from './styles'


const BottomInput = () => {

    const [messages, setMessages] = useState<string[]>([
        "Hala satılık mı?",
        "Fiyatta pazarlık payı var mı?",
        "Ürünün durumu nasıl?"
    ])
    const [sendValue, setSendValue] = useState<string>()

    return (

        <View style={styles.container}
        >
            <FlatList
                data={messages}
                contentContainerStyle={{ marginTop: 12 }}
                keyExtractor={item => `${item}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <CustomMessageBox text={item} onPress={() => setSendValue(item)} />
                    )
                }}
            />
            <View style={styles.bottomContainer}>
                <TextInput
                    placeholder={messages[0]}
                    style={styles.textInput}
                    placeholderTextColor="black"
                    value={sendValue}
                    onChangeText={setSendValue}
                />
                <TouchableOpacity style={styles.sendContainer}
                    onPress={() => Alert.alert("Message has been sent to the owner!")}
                >
                    <Text style={styles.sendText}>Gönder</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomInput