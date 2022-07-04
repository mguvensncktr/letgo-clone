import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

const NotificationItem = ({ title }: { title: string }) => {
    return (
        <>
            <View style={styles.innerContainer}>
                <Image
                    source={{ uri: "https://marifetbelgelendirme.com.tr/userFiles/no-image.png" }}
                    resizeMode="cover"
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25
                    }}
                />
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity style={styles.rightContainer}>
                    <Entypo name="dots-three-vertical" size={24} color="#959595" />
                    <Text style={styles.dateText}>1 h</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Daha fazla puan kazan</Text>
            </TouchableOpacity>
            <View
                style={styles.divider}
            />
        </>
    )
}

export default NotificationItem