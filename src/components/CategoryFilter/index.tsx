import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import categoriesData from '../../../assets/categories'
import { Category } from '../../types'
import CategoryItem from '../CategoryItem'

const CategoryFilter = () => {

    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        setCategories(categoriesData);
        return () => {
            setCategories([])
        }
    }, [])

    return (
        <ScrollView
            bounces={true}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            {categories.map((item) => {
                return (
                    <CategoryItem category={item} />
                )
            })}
        </ScrollView>
    )
}

export default CategoryFilter