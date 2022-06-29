import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import filteringsData from '../../../assets/filterings'
import { Filtering, Category } from '../../types'
import { Ionicons, Entypo } from '@expo/vector-icons'

type CategoryFiltersProps = {
    selectedCategory: Category
}

const CategoryScreenFilters = ({ selectedCategory }: CategoryFiltersProps) => {

    const [filterings, setFilterings] = useState<Filtering[]>([])

    useEffect(() => {
        setFilterings(filteringsData)
        return () => {
            setFilterings([])
        }
    }, [])

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces>
            <View style={styles.altFilterContainer}>
                <View style={styles.innerFilterContainer}>
                    <View
                        style={styles.filterIconContainer}
                    >
                        <Image source={selectedCategory.src} resizeMode="contain" style={styles.image} />
                    </View>
                    <Text style={styles.altFilterText}>{selectedCategory.name}</Text>
                    <Entypo name="cross" size={22} color="white" />
                </View>
            </View>
            {
                filterings.map((item: Filtering, index) => {
                    return (
                        <View
                            key={index}
                            style={item.id == '6' || item.id == '7' ? styles.altFilterContainer : styles.filterContainer}
                        >
                            <Text style={item.id == '6' || item.id == '7' ? styles.altFilterText : styles.filterText}>{item.name}</Text>
                            <Ionicons name="chevron-down" size={22} color={item.id == '6' || item.id == '7' ? 'white' : 'gray'} />
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

export default CategoryScreenFilters