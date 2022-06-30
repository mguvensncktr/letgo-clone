import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Product } from '../../types'
import { FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import ImageCarousel from '../../components/ImageCarousel'

const ProductDetailsScreen = (props) => {

    const [product, setProduct] = useState<Product>(props.route.params.product)

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={styles.headerLeftContainer}>
                    <TouchableOpacity style={styles.headerLeft}>
                        <FontAwesome name="close" size={24} color="white" />
                    </TouchableOpacity>
                    {
                        props.route.params.prodType === "favourite" &&
                        <TouchableOpacity style={styles.headerLeft2}>
                            <MaterialCommunityIcons name="upload" size={24} color="white" />
                            <Text style={styles.topListingText}>Top Listing</Text>
                        </TouchableOpacity>
                    }
                </View>
                <TouchableOpacity style={styles.headerRight}>
                    <Entypo name="forward" size={24} color="white" />
                </TouchableOpacity>
            </View>
            {/* Image Carousel */}
            <ImageCarousel images={product.images} />
        </ScrollView>
    )
}

export default ProductDetailsScreen