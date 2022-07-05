import { ActivityIndicator, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Product, Category } from '../../models'
import MainProducts from '../../components/MainProducts'
import MessageNotification from '../../components/MessageNotification'
import CategoryScreenFilters from '../../components/CategoryScreenFilters'
import { DataStore } from 'aws-amplify'


const CategoryScreen = (props: any) => {

    const [productsList, setProductsList] = useState<Product[]>([]);
    const [category, setCategory] = useState<Category>(props.route.params.selectedCategory)
    const categoryId = props.route.params.categoryId;

    useEffect(() => {
        DataStore.query(Product, p => p.productCategoryId("eq", categoryId)).then(setProductsList)
    }, [categoryId])

    const productCount = productsList.length

    if (!categoryId && !category) {
        return <ActivityIndicator size="large" />
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', height: '100%' }} showsVerticalScrollIndicator={false}>
            <CategoryScreenFilters selectedCategory={category} />
            <MessageNotification />
            <MainProducts mainProducts={productsList} header={`Arama Sonuçları (${productCount})`} />
        </ScrollView>
    )
}

export default CategoryScreen