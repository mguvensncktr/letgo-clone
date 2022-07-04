import { Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import NotificationItem from '../../components/NotificationItem'

const NotificationScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Eski</Text>
            <NotificationItem title="Hesabın Google ile doğrulandı!" />
            <NotificationItem title="Email adresin doğrulandı!" />
        </ScrollView>
    )
}

export default NotificationScreen