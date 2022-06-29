import { ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import products from '../../../assets/products';
import { Product } from '../../types';
import styles from './styles'
import FeaturedProducts from '../../components/FeaturedProducts';
import MainProducts from '../../components/MainProducts';
import CategoryFilter from '../../components/CategoryFilter';
import MessageNotification from '../../components/MessageNotification';

const HomeScreen = () => {

    const [productList, setProductList] = useState<Product[]>([])

    useEffect(() => {
        setProductList(products)
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