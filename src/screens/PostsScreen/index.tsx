import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import products from '../../../assets/products'
import { Product } from '../../types'
import styles from './styles'
import PostItem from '../../components/PostItem'

const PostsScreen = () => {

    const [myProducts, setMyProducts] = useState<Product[]>([])
    const [headers, setHeaders] = useState<string[]>([
        "Favoriler",
        "Satıyor",
        "Süresi Dolmuş",
        "Satıldı"
    ])
    const [activeHeader, setActiveHeader] = useState<string>(headers[0])

    useEffect(() => {
        setMyProducts(products)
        return () => {
            setMyProducts([])
        }
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={myProducts}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <PostItem post={item} />
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