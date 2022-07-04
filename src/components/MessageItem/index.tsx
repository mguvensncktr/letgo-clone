import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';


const MessageItem = () => {

    return (
        <TouchableOpacity
            onPress={() => console.log("Message pressed")}
        >
            <View style={styles.container}>
                <View>
                    <Image
                        source={{ uri: "https://cdn.dsmcdn.com/mnresize/500/-/ty32/product/media/images/20210326/23/75554837/108939192/1/1_org.jpg" }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <Image
                        source={{ uri: "https://m.media-amazon.com/images/I/41Q8uAgjATS._AC_SY1000_.jpg" }}
                        style={styles.ownerImage}
                        resizeMode="cover"
                    />
                    <View style={styles.verified}>
                        <AntDesign name="check" size={14} color="white" />
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">PS5 Standart Edition SSD Oyun Konsolu</Text>
                    <Text style={styles.sellerTitle}>Güven</Text>
                    <View style={styles.messageStatus}>
                        <AntDesign name="clockcircle" size={14} color="red" />
                        <Text style={styles.messageStatusText}>Yanıtınızı bekliyor</Text>
                    </View>
                </View>
                <Text style={styles.date}>2 days</Text>
            </View>
            <View
                style={styles.divider}
            />
        </TouchableOpacity>
    )
}

export default MessageItem