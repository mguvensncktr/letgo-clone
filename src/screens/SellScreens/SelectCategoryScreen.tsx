import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DataStore } from 'aws-amplify'
import { Category } from '../../models'
import { useNavigation } from '@react-navigation/native'

const SelectCategoryScreen = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        DataStore.query(Category).then(setCategories)
    }, [])

    return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={categories}
                numColumns={2}
                contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={{
                                marginBottom: 25, marginTop: 25, marginHorizontal: 40, alignItems: 'center'
                            }}
                            onPress={() => navigation.navigate('ListingDetails', { selectedCategory: item })}
                        >
                            <Image
                                source={{ uri: item.src }}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25
                                }}
                            />
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default SelectCategoryScreen