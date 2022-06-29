import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import PostsScreen from '../screens/PostsScreen';

const Stack = createNativeStackNavigator();

const MyPostsNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Posts"
                component={PostsScreen}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => console.log("Bulb Pressed")}>
                            <Foundation name="lightbulb" size={24} color="#959595" />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => (
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>İlanlarım</Text>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => console.log("Share pressed")}>
                            <MaterialCommunityIcons name="share" size={24} color="#959595" />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    )
}

export default MyPostsNavigator