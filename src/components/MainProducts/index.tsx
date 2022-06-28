import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Product } from '../../types'
import { Entypo } from '@expo/vector-icons';
import FeaturedProductItem from '../FeaturedProductItem';

type mainProductProps = {
    mainProducts: Product[]
}

const MainProducts = ({ mainProducts }: mainProductProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.mainTitle}>
                    Keçiören
                </Text>
                <TouchableOpacity style={styles.editTitleContainer} onPress={() => console.log("Edit Pressed")}>
                    <Text style={styles.editTitleText}>Düzelt</Text>
                    <Entypo name="chevron-small-right" size={20} color={"#F24E61"} />
                </TouchableOpacity>
            </View>
            <View style={styles.mainProductsContainer}>
                {mainProducts.map((item, index) => {
                    return (
                        <FeaturedProductItem prodType="main" key={index} product={item} />
                    )
                })}
            </View>
        </View>
    )
}

export default MainProducts