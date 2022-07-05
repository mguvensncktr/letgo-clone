import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Product } from '../../models';
import { Entypo } from '@expo/vector-icons';
import FeaturedProductItem from '../FeaturedProductItem';

type mainProductProps = {
    mainProducts: Product[],
    header: string,
    isFiltered?: boolean
}

const MainProducts = ({ mainProducts, header, isFiltered }: mainProductProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.mainTitle}>
                    {header}
                </Text>
                {
                    isFiltered && <TouchableOpacity style={styles.editTitleContainer} onPress={() => console.log("Edit Pressed")}>
                        <Text style={styles.editTitleText}>Düzelt</Text>
                        <Entypo name="chevron-small-right" size={20} color={"#F24E61"} />
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.mainProductsContainer}>
                {mainProducts.map((item, index) => {
                    return (
                        <FeaturedProductItem prodType="main" key={index} product={item} productId={item.id} />
                    )
                })}
            </View>
        </View>
    )
}

export default MainProducts