import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { Category } from '../../types'

type categoryProps = {
    category: Category
}

const CategoryItem = ({ category }: categoryProps) => {
    return (
        <TouchableOpacity
            style={styles.container}
        >
            <Image
                source={category.src}
                style={styles.categoryImage}
                resizeMode="contain"
            />
            <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryItem