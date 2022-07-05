import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product, User } from '../../models';
import { FontAwesome, AntDesign, FontAwesome5, Foundation } from '@expo/vector-icons';
import styles from './styles';
import SellerProfile from '../SellerProfile';
import SellerAddressMap from '../../components/SellerAddressMap';
import ShareProductLinks from '../ShareProductLinks';
import CustomButton from '../CustomButton';
import { DataStore } from 'aws-amplify';

const ProductDescription = ({ product }: { product: Product | undefined }) => {

    const [seller, setSeller] = useState<User>()
    const userId = product?.userID

    const fetchSeller = async () => {
        const seller = await DataStore.query(User, u => u.id("eq", userId));
        setSeller(seller[0])
    }

    useEffect(() => {
        fetchSeller()
    }, [userId])

    if (!product && !userId) {
        return <ActivityIndicator size="large" />
    }

    return (
        <View style={styles.container}>
            <View style={styles.priceContainer}>
                <View style={styles.priceLeftContainer}>
                    <FontAwesome name="turkish-lira" size={30} color="black" />
                    <Text style={styles.price}>
                        {product?.price}
                    </Text>
                </View>
                <TouchableOpacity style={styles.favContainer}
                    onPress={() => console.log("Fav item pressed")}
                >
                    <AntDesign name="heart" size={24} color="#959595" />
                </TouchableOpacity>
            </View>
            <Text style={styles.name}>
                {product?.name}
            </Text>
            <View style={styles.infoContainer}>
                <View style={styles.infoLeftContainer}>
                    <FontAwesome5 name="gripfire" size={20} color="#F24E61" />
                    <Text style={styles.heat}>{product?.time} dk</Text>
                </View>
                <View style={styles.seen}>
                    <Foundation name="eye" size={20} color="#959595" />
                    <Text style={styles.seenText}>{product?.numReviews}</Text>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                    {product?.description}
                </Text>
            </View>
            <SellerProfile seller={seller} />
            <SellerAddressMap seller={seller} />
            <ShareProductLinks />
            <CustomButton text={"İlanı şikayet et"} />
        </View>
    )
}

export default ProductDescription