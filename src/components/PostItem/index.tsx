import { View, Text, Image } from 'react-native'
import React from 'react'
import { Product } from '../../types'
import styles from './style'
import { FontAwesome } from '@expo/vector-icons';

type PostItemProps = {
    post: Product
}

const PostItem = ({ post }: PostItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Image source={{ uri: post.image }} style={styles.image} resizeMode="cover" />
                <View style={styles.infoContainer}>
                    <View style={styles.priceContainer}>
                        <FontAwesome name="turkish-lira" size={16} color="black" />
                        <Text style={styles.postPrice}>
                            {' '}{post.price}
                        </Text>
                    </View>
                    <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
                        {post.description}
                    </Text>
                </View>
                <FontAwesome name="trash-o" size={24} color="#959595" />
            </View>
            <View
                style={styles.divider}
            />
            {
                post.type === 'share' ?
                    <View style={styles.shareContainer}>
                        <Text style={styles.shareButton}>Paylaş</Text>
                        <Text style={styles.chatButton}>Sohbet et</Text>
                    </View>
                    :
                    <View style={styles.bottomContainer}>
                        <Text style={styles.bottomContainerText}>Daha fazla Bilgi</Text>
                    </View>
            }

        </View>
    )
}

export default PostItem