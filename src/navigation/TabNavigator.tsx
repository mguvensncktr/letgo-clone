import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigator from './HomeNavigator';
import { Foundation, Ionicons, MaterialCommunityIcons, AntDesign, FontAwesome } from '@expo/vector-icons'
import MyPostsNavigator from './MyPostsNavigator';
import MessageNavigator from './MessageNavigator';
import NotificationNavigator from './NotificationNavigator';
import SellNavigator from './SellNavigator';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    const navigation = useNavigation()
    const CustomTabBarButton = ({ children, onPress }: any) => {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }

    return (
        <Tab.Navigator
            initialRouteName='Ana Sayfa'
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#F24E61",
                tabBarInactiveTintColor: "#959595",
                headerShown: false,
                tabBarStyle: {
                    height: 50,
                    borderTopWidth: 0
                },
                tabBarLabelStyle: {
                    marginTop: -10,
                    marginBottom: 5,
                    fontSize: 10
                }
            }}
        >
            <Tab.Screen
                name="Ana Sayfa"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Foundation name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Bildirimler"
                component={NotificationNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Ionicons name="notifications" size={24} color={color} />
                            <View style={{ position: 'absolute', backgroundColor: '#F24E61', top: -4, right: -9, width: 16, height: 16, borderRadius: 8, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <Text style={{ color: 'white' }}>2</Text>
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Sat"
                component={SellNavigator}
                options={{
                    tabBarButton: () => <CustomTabBarButton onPress={() => navigation.navigate('Sat')}>
                        <FontAwesome name="camera" size={20} color={"white"} />
                        <Text style={{ color: 'white' }}>Sat</Text>
                    </CustomTabBarButton>
                }}
            />
            <Tab.Screen
                name="Sohbet"
                component={MessageNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="message-processing" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="??lanlar??m"
                component={MyPostsNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="appstore1" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        backgroundColor: '#F24E61',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -16,
        borderWidth: 3,
        borderColor: 'white'
    }
})

export default TabNavigator