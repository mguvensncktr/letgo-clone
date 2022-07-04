import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MessageScreen from '../screens/MessageScreen';
import { FontAwesome, Entypo } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

const MessageNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Messages"
                component={MessageScreen}
                options={{
                    headerTitle: () => {
                        return (
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Sohbet - Hepsi</Text>
                        )
                    },
                    headerRight: () => {
                        return (
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => console.log('Filters pressed')}
                                    style={{ marginRight: 15 }}>
                                    <FontAwesome name="sliders" size={24} color={'#959595'} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => console.log('More pressed')}>
                                    <Entypo name="dots-three-horizontal" size={24} color={'#959595'} />
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }}
            />
        </Stack.Navigator >
    )
}

export default MessageNavigator