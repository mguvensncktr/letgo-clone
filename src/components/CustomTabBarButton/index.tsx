import { TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const CustomTabBarButton = ({ children }: any) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => console.log("Sell pressed")}
        >
            {children}
        </TouchableOpacity>
    )
}

export default CustomTabBarButton