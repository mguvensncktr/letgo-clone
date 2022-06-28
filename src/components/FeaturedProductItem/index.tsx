import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Product } from '../../types'
import { AntDesign } from '@expo/vector-icons'

type productProps = {
    product: Product,
    prodType: string
}

const FeaturedProductItem = ({ product, prodType }: productProps) => {

    const [isLiked, setIsLiked] = useState<boolean>(false);

    const likeProduct = () => {
        setIsLiked(!isLiked)
    }

    return (
        <TouchableOpacity style={prodType === "main" ? styles.mainProductContainer : styles.container}>
            <View style={prodType === "main" ? styles.mainProductImageContainer : styles.imageContainer}>
                <Image
                    source={{ uri: product.image }}
                    resizeMode="cover"
                    style={styles.image}
                />
                {prodType === "favourite" && parseInt(product.id) % 2 == 1 && <View style={styles.isFeaturedContainer}>
                    <Text style={styles.isFeaturedText}>Öne Çıkan</Text>
                </View>
                }
                <TouchableOpacity style={styles.heart} onPress={likeProduct}>
                    <AntDesign name="heart" size={prodType === "main" ? 26 : 24} color={isLiked ? 'red' : '#dbdbdb'} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default FeaturedProductItem