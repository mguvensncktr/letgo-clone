import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles';
import { User } from '../../models'


const SellerAddressMap = ({ seller }: { seller: User | undefined }) => {

    if (!seller) {
        return <ActivityIndicator size="large" />
    }

    return (
        <>
            <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: seller.lat,
                    longitude: seller.long,
                    latitudeDelta: 0,
                    longitudeDelta: 0.5,
                }}
                style={styles.map}
            />
            <View
                style={styles.bottomContainer}
            >
                <View style={styles.textContainer}>
                    <Text>
                        {seller.city}{','}
                    </Text>
                    <Text>{' '}06310</Text>
                </View>
            </View>
        </>
    )
}

export default SellerAddressMap