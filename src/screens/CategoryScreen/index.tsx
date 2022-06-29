import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Product, Category } from '../../types'
import MainProducts from '../../components/MainProducts'
import products from '../../../assets/products'
import MessageNotification from '../../components/MessageNotification'
import CategoryScreenFilters from '../../components/CategoryScreenFilters'


const CategoryScreen = (props) => {

    const [productsList, setProductsList] = useState<Product[]>([]);
    const [category, setCategory] = useState<Category>(props.route.params.selectedCategory)
    useEffect(() => {
        setProductsList(products)
    }, [])

    return (
        <ScrollView style={{ backgroundColor: 'white', height: '100%' }} showsVerticalScrollIndicator={false}>
            <CategoryScreenFilters selectedCategory={category} />
            <MessageNotification />
            <MainProducts mainProducts={productsList} header={"Arama Sonuçları (14408)"} />
        </ScrollView>
    )
}

export default CategoryScreen