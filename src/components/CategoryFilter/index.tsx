import { ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import { Category } from '../../models'
import CategoryItem from '../CategoryItem'
import { DataStore } from 'aws-amplify'

const CategoryFilter = () => {

    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        DataStore.query(Category).then(setCategories)
    }, [])

    return (
        <ScrollView
            bounces={true}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            {categories.map((item: Category, index) => {
                return (
                    <CategoryItem category={item} key={index} categoryId={item.id} />
                )
            })}
        </ScrollView>
    )
}

export default CategoryFilter