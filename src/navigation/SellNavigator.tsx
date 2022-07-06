import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SelectCategoryScreen from '../screens/SellScreens/SelectCategoryScreen';
import ListingDetailsScreen from '../screens/SellScreens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

const SellNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SelectCategory"
                component={SelectCategoryScreen}
                options={{
                    headerTitle: () => {
                        return (
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Categori Seç</Text>
                        )
                    },
                }}
            />
            <Stack.Screen
                name="ListingDetails"
                component={ListingDetailsScreen}
                options={{
                    headerTitle: () => {
                        return (
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>İlan Detayları</Text>
                        )
                    },
                }}
            />
        </Stack.Navigator >
    )
}

export default SellNavigator