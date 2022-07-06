import { ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Product, User } from '../../models';
import FeaturedProducts from '../../components/FeaturedProducts';
import MainProducts from '../../components/MainProducts';
import CategoryFilter from '../../components/CategoryFilter';
import MessageNotification from '../../components/MessageNotification';
import { DataStore, Auth } from 'aws-amplify';



const HomeScreen = () => {

    const [user, setUser] = useState(null)
    const [productList, setProductList] = useState<Product[]>([])

    const fetchProducts = async () => {
        const results = await DataStore.query(Product)
        setProductList(results)
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    useEffect(() => {
        const subscription = DataStore.observe(Product).subscribe(msg => {
            fetchProducts();
        });

        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser)
    }, [])

    const sub = user?.attributes?.sub;

    const saveUser = async () => {
        if (user) {
            return
        }
        await DataStore.save(
            new User({
                name: user.username,
                userSub: sub,
                rating: 5,
                photo: "https://img1.picmix.com/output/stamp/normal/4/5/0/7/1807054_a6894.png",
                lat: 40.021062,
                long: 32.831015,
                city: "Kecioren"
            })
        )
    }

    useEffect(() => {
        saveUser()
    }, [])


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