import { ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Product } from '../../models';
import FeaturedProducts from '../../components/FeaturedProducts';
import MainProducts from '../../components/MainProducts';
import CategoryFilter from '../../components/CategoryFilter';
import MessageNotification from '../../components/MessageNotification';
import { DataStore } from 'aws-amplify';


const HomeScreen = () => {

    const [productList, setProductList] = useState<Product[]>([])

    useEffect(() => {
        DataStore.query(Product).then(setProductList)
    }, [])

    return (
        <ScrollView style={{ backgroundColor: 'white', height: '100%' }} showsVerticalScrollIndicator={false}>
            <MessageNotification />
            <CategoryFilter />
            <FeaturedProducts featuredProducts={productList} />
            <MainProducts mainProducts={productList} header={"Keçiören"} isFiltered />
        </ScrollView>
    )
}

export default HomeScreen