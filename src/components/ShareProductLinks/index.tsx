import { View, Text } from 'react-native'
import React from 'react'
import SingleSocialLink from '../SingleSocialLink';
import styles from './styles';

const ShareProductLinks = () => {
    return (
        <View style={styles.container}>
            <Text>Bu ilanı paylaş</Text>
            <View
                style={styles.innerContainer}
            >
                <SingleSocialLink bgColor={"#39ff5a"} iconName={"message-circle"} type={"message"} />
                <SingleSocialLink bgColor={"#4267B2"} iconName={"facebook-f"} type={"facebook"} />
                <SingleSocialLink bgColor={"#1DA1F2"} iconName={"twitter"} type={"twitter"} />
                <SingleSocialLink bgColor={"#4FCE5D"} iconName={"whatsapp"} type={"whatsapp"} />
                <SingleSocialLink bgColor={"#959595"} iconName={"mail"} type={"mail"} />
                <SingleSocialLink bgColor={"#479e41"} iconName={"paperclip"} type={"paperclip"} />
                <SingleSocialLink bgColor={"gray"} iconName={"dots-three-horizontal"} type={"more"} />
            </View>
        </View>
    )
}

export default ShareProductLinks