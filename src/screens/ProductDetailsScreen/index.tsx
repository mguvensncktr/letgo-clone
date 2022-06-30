import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Product } from '../../types'
import { FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import ImageCarousel from '../../components/ImageCarousel'
import { useNavigation } from '@react-navigation/native';
import ProductDescription from '../../components/ProductDescription';

const ProductDetailsScreen = (props: any) => {

    const [product, setProduct] = useState<Product>(props.route.params.product)
    const navigation = useNavigation()

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Image Carousel */}
            <ImageCarousel images={product.images} />
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerLeftContainer}>
                        <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.goBack()}>
                            <FontAwesome name="close" size={24} color="white" />
                        </TouchableOpacity>
                        {
                            props.route.params.prodType === "favourite" &&
                            <TouchableOpacity style={styles.headerLeft2} onPress={() => console.log("Top listed")}>
                                <MaterialCommunityIcons name="upload" size={24} color="white" />
                                <Text style={styles.topListingText}>Top Listing</Text>
                            </TouchableOpacity>
                        }
                    </View>
                    <TouchableOpacity style={styles.headerRight} onPress={() => console.log("share")}>
                        <Entypo name="forward" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <ProductDescription product={product} />
            </View>
        </ScrollView>
    )
}

export default ProductDetailsScreen