import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigator from './HomeNavigator';
import { Foundation, Ionicons, MaterialCommunityIcons, AntDesign, FontAwesome } from '@expo/vector-icons'
import CustomTabBarButton from '../components/CustomTabBarButton';
import MyPostsNavigator from './MyPostsNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

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
            }
            }
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
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Ionicons name="notifications" size={24} color={color} />
                            <View style={{ position: 'absolute', backgroundColor: '#F24E61', top: -4, right: -9, width: 16, height: 16, borderRadius: 8, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <Text style={{ color: 'white' }}>2</Text>
                            </View>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Sat"
                component={HomeNavigator}
                options={{
                    tabBarButton: () => <CustomTabBarButton>
                        <FontAwesome name="camera" size={20} color={"white"} />
                        <Text style={{ color: 'white' }}>Sat</Text>
                    </CustomTabBarButton>
                }}
            />
            <Tab.Screen
                name="Sohbet"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="message-processing" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="İlanlarım"
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

export default TabNavigator