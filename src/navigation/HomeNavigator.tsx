import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons, Feather } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {

    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => console.log("Profile pressed")}>
                            <Image source={{ uri: 'https://m.media-amazon.com/images/I/41pJJNWD8lL._AC_SY780_.jpg' }}
                                resizeMode="cover"
                                style={{ width: 30, height: 30, borderRadius: 15 }} />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => (
                        <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e2e2e2', borderRadius: 10, marginLeft: -25 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                <Ionicons name="search-outline" size={24} color="#959595" style={{ marginRight: 5 }} />
                                <TextInput placeholder='Ara...' style={{ paddingVertical: 5, fontSize: 16 }} placeholderTextColor={"#959595"} />
                            </View>
                        </View>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => console.log("Filters pressed")}>
                            <Text style={{ color: '#F24E61', fontSize: 18, fontWeight: 'bold' }}>Filtrele</Text>
                        </TouchableOpacity>
                    ),

                }}
            />
            <Stack.Screen
                name="CategoryFilter"
                component={CategoryScreen}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Feather name="arrow-left" size={24} color={"#959595"} />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => (
                        <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e2e2e2', borderRadius: 10, marginLeft: -35 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                <Ionicons name="search-outline" size={24} color="#959595" style={{ marginRight: 5 }} />
                                <TextInput placeholder='Ara...' style={{ paddingVertical: 5, fontSize: 16 }} placeholderTextColor={"#959595"} />
                            </View>
                        </View>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => console.log("Filters pressed")} style={{ marginLeft: 15 }} >
                            <Text style={{ color: '#F24E61', fontSize: 18, fontWeight: 'bold' }}>Filtrele(1)</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator