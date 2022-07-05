import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Product } from '../../models'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

type productProps = {
    product: Product,
    prodType: string,
    productId: string
}

const FeaturedProductItem = ({ product, prodType, productId }: productProps) => {

    const [isLiked, setIsLiked] = useState<boolean>(false);

    const navigation = useNavigation();

    const likeProduct = () => {
        setIsLiked(!isLiked)
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { productId, prodType })} style={prodType === "main" ? styles.mainProductContainer : styles.container}>
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