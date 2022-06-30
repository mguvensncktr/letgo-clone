import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'
import styles from './styles'

const ImageCarousel = ({ images }: { images: string[] }) => {

    const { width } = Dimensions.get('window')
    const [activeIndex, setActiveIndex] = useState(0)
    const onViewRef = useRef((viewableItems: any) => {
        if (viewableItems.viewableItems.length > 0) {
            setActiveIndex(viewableItems.viewableItems[0].index || 0)
        }
    })
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

    return (
        <View>
            <FlatList
                data={images}
                keyExtractor={item => `${item}`}
                renderItem={({ item }) => {
                    return (
                        <Image
                            source={{ uri: item }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    )
                }}
                horizontal
                snapToInterval={width}
                showsHorizontalScrollIndicator={false}
                snapToAlignment={"center"}
                decelerationRate="fast"
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
            />
            <View style={styles.dots}>
                {
                    images.map((_, index) => {
                        return (
                            <View key={index} style={index === activeIndex ? styles.activeDot : styles.dot} />
                        )
                    })
                }
            </View>
        </View>
    )
}

export default ImageCarousel