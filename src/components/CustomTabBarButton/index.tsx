import { TouchableOpacity } from 'react-native'
import React from 'react'

const CustomTabBarButton = ({ children }: any) => {
    return (
        <TouchableOpacity
            style={{
                width: 60,
                height: 60,
                backgroundColor: '#F24E61',
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -16,
                borderWidth: 3,
                borderColor: 'white'
            }}
            onPress={() => console.log("Sell pressed")}
        >
            {children}
        </TouchableOpacity>
    )
}

export default CustomTabBarButton