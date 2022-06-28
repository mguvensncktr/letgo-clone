import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Product } from '../../types';
import styles from './styles'
import FeaturedProductItem from '../../components/FeaturedProductItem';

type featuredProductsProps = {
    featuredProducts: Product[]
}

const FeaturedProducts = ({ featuredProducts }: featuredProductsProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.featuredHeader}>
                <Text style={styles.featuredHeaderText}>Vitrin İlanlar</Text>
                <TouchableOpacity style={styles.seeAllTextContainer} onPress={() => console.log('See All Pressed')}>
                    <Text style={styles.seeAllText}>Hepsini gör</Text>
                    <Entypo name="chevron-small-right" size={20} color={"#F24E61"} />
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                bounces={true}
                showsHorizontalScrollIndicator={false}
            >
                {featuredProducts.map((item, index) => {
                    return (
                        <FeaturedProductItem prodType="favourite" key={index} product={item} />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default FeaturedProducts