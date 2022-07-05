import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Product, FavouriteProducts } from '../../models'
import styles from './styles'
import PostItem from '../../components/PostItem'
import { DataStore, Auth } from 'aws-amplify'

const PostsScreen = () => {

    const [myProducts, setMyProducts] = useState<FavouriteProducts[]>([])
    const [headers, setHeaders] = useState<string[]>([
        "Favoriler",
        "Satıyor",
        "Süresi Dolmuş",
        "Satıldı"
    ])
    const [activeHeader, setActiveHeader] = useState<string>(headers[0])

    const fetchFavProds = async () => {
        const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true })
        DataStore.query(FavouriteProducts, f => f.userID("eq", userInfo.attributes.sub)).then(setMyProducts);
    }

    useEffect(() => {
        fetchFavProds();
    }, [])

    useEffect(() => {

        const fetchProducts = async () => {
            var products = await Promise.all(
                myProducts.map((favProd) =>
                    DataStore.query(Product, favProd.favouriteProductsProductId)
                )
            );

            setMyProducts((myProducts) =>
                myProducts.map((favProd) => ({
                    ...favProd,
                    product: products.find((p) => p?.id === favProd.favouriteProductsProductId),
                }))
            );
        };

        fetchProducts();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={myProducts}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <PostItem post={item.product} />
                    )
                }}
                stickyHeaderIndices={[0]}
                ListHeaderComponent={() => {
                    return (
                        <View style={styles.headers}>
                            {headers.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => setActiveHeader(item)}>
                                        <Text style={activeHeader === item ? styles.activeHeaderText : styles.inActiveHeaderText}>{item}</Text>
                                        {
                                            activeHeader === item &&
                                            <View
                                                style={styles.activeHeaderLine}
                                            />
                                        }
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default PostsScreen