import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window')

type SellerProps = {
    lat: number,
    long: number,
    city: string
}

const SellerAddressMap = ({ seller }: { seller: SellerProps }) => {
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
                style={{
                    width: width - 30,
                    height: height * 0.2,
                    borderRadius: 15,
                    marginTop: 20,
                }}
            />
            <View
                style={{
                    height: 60,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderWidth: 1,
                    borderTopWidth: 0,
                    marginTop: -10,
                    borderColor: '#e5e5e5',
                    justifyContent: 'center'
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 20,
                    marginTop: 10
                }}>
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