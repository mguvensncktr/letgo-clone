import { ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Product } from '../../models';
import FeaturedProducts from '../../components/FeaturedProducts';
import MainProducts from '../../components/MainProducts';
import CategoryFilter from '../../components/CategoryFilter';
import MessageNotification from '../../components/MessageNotification';
import { DataStore, Auth } from 'aws-amplify';



const HomeScreen = () => {

    const [user, setUser] = useState(null)
    const [productList, setProductList] = useState<Product[]>([])

    useEffect(() => {
        DataStore.query(Product).then(setProductList)
    }, [])

    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser)
    }, [])

    const sub = user?.attributes?.sub;

    return (
        <ScrollView style={{ backgroundColor: 'white', height: '100%' }} showsVerticalScrollIndicator={false}>
            <MessageNotification />
            <CategoryFilter />
            <FeaturedProducts featuredProducts={productList} userSub={sub} />
            <MainProducts mainProducts={productList} header={"Keçiören"} isFiltered userSub={sub} />
        </ScrollView>
    )
}

export default HomeScreen