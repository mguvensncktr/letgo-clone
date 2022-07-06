import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Product, FavouriteProducts } from '../../models';
import styles from './style'
import { FontAwesome } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify'
import { S3Image } from 'aws-amplify-react-native'

type PostItemProps = {
    post: Product
}

const PostItem = ({ post }: PostItemProps) => {

    const deletePost = async () => {
        const postItem = await DataStore.query(FavouriteProducts, p => p.favouriteProductsProductId("eq", post.id))
        DataStore.delete(postItem[0])
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                {
                    post.image.startsWith('http') ?
                        <Image source={{ uri: post.image }} style={styles.image} resizeMode="cover" /> :
                        <S3Image
                            imgKey={post?.images[1]}
                            style={styles.image}
                        />
                }
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
                <TouchableOpacity onPress={deletePost}>
                    <FontAwesome name="trash-o" size={24} color="#959595" />
                </TouchableOpacity>
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