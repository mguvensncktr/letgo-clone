import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';
import { User } from '../../models'


const SellerProfile = ({ seller }: { seller: User | undefined }) => {

    if (!seller) {
        return <ActivityIndicator size="large" />
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image
                    source={{ uri: seller.photo }}
                    style={styles.image}
                    resizeMode="stretch"
                />
                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>
                        {seller.name}
                    </Text>
                    <View style={styles.ratingContainer}>
                        {
                            [0, 0, 0, 0, 0].map((s, i) => (
                                <FontAwesome key={i} name="star" style={styles.star} size={16} color={i < seller.rating ? '#ebc82d' : '#e5e5e5'} />
                            ))
                        }
                    </View>
                </View>
            </View>
            <TouchableOpacity>
                <FontAwesome name="chevron-right" size={22} color="#959595" />
            </TouchableOpacity>
        </View>
    )
}

export default SellerProfile