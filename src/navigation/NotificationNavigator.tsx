import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NotificationScreen from '../screens/NotificationScreen';
import { FontAwesome } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

const MessageNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Notifications"
                component={NotificationScreen}
                options={{
                    headerTitle: () => {
                        return (
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Bildirimler</Text>
                        )
                    },
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => console.log('Settings pressed')}>
                                <FontAwesome name="gear" size={24} color={'#959595'} />
                            </TouchableOpacity>
                        )
                    }
                }}
            />
        </Stack.Navigator >
    )
}

export default MessageNavigator