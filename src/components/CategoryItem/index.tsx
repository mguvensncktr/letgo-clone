import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { Category } from '../../types'
import { useNavigation } from '@react-navigation/native'

type categoryProps = {
    category: Category,
    categoryId: string
}

const CategoryItem = ({ category, categoryId }: categoryProps) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("CategoryFilter", { selectedCategory: category, categoryId: categoryId })}
        >
            <Image
                source={{ uri: category.src }}
                style={styles.categoryImage}
                resizeMode="contain"
            />
            <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryItem