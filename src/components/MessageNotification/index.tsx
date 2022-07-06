import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import { FancyAlert } from 'react-native-expo-fancy-alerts';

const MessageNotification = () => {

    const [visible, setVisible] = React.useState(false);
    const toggleAlert = React.useCallback(() => {
        setVisible(!visible);
    }, [visible]);

    return (
        <TouchableOpacity style={styles.container} onPress={toggleAlert}>
            <View style={styles.innerContainer}>
                <View style={styles.leftContainer}>
                    <MaterialCommunityIcons name="message-processing" size={30} color={"#969696"} />
                    <Text style={styles.messageText}>Mesaj bildirimlerini aç</Text>
                </View>
                <Entypo name="chevron-right" size={30} color={"#969696"} />
            </View>
            <FancyAlert
                visible={visible}
                icon={
                    <View style={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#e1e1e1',
                        borderRadius: 50,
                        width: '100%',
                    }}>
                        <MaterialCommunityIcons name="message-bulleted" size={24} color="gray" />
                    </View>}
                style={{ backgroundColor: 'white' }}
            >
                <Text style={{ marginTop: -16, marginBottom: 32, fontSize: 20, fontWeight: 'bold' }}>YANIT KAÇIRMA!</Text>
                <Text style={{ marginTop: -16, marginBottom: 32, fontSize: 14, flexWrap: 'wrap', textAlign: 'center' }}>Mesaj bildirimlerini şimdi açmak ister misiniz?</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <TouchableOpacity
                        onPress={toggleAlert}
                        style={{ width: 80, height: 30, backgroundColor: '#F24E61', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Aç</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={toggleAlert}
                        style={{ marginLeft: 20, width: 80, height: 30, borderRadius: 15, backgroundColor: 'white', borderWidth: 1, borderColor: '#F24E61', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#F24E61', fontSize: 16 }}>İptal</Text>
                    </TouchableOpacity>
                </View>
            </FancyAlert>
        </TouchableOpacity>
    )
}

export default MessageNotification