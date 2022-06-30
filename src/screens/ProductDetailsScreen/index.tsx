import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Product } from '../../types'
import { useRoute } from '@react-navigation/native'
import { FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

type ProductDetailsProps = {
    product: Product,
    prodType: string
}

const ProductDetailsScreen = () => {

    const route = useRoute()

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerLeftContainer}>
                    <TouchableOpacity style={styles.headerLeft}>
                        <FontAwesome name="close" size={24} color="white" />
                    </TouchableOpacity>
                    {
                        route.params.prodType === "favourite" &&
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
        </ScrollView>
    )
}

export default ProductDetailsScreen