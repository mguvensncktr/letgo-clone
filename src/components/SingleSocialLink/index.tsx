import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather, AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
import styles from './styles';

const SingleSocialLink = ({ bgColor, iconName, type }: { bgColor: string, iconName: string, type: string }) => {

    let Vector;

    if (type === "message") {
        Vector = Feather
    }
    if (type === "facebook") {
        Vector = FontAwesome
    }
    if (type === "twitter") {
        Vector = AntDesign
    }
    if (type === "whatsapp") {
        Vector = FontAwesome
    }
    if (type === "paperclip") {
        Vector = Feather
    }
    if (type === "mail") {
        Vector = Feather
    }
    if (type === "more") {
        Vector = Entypo
    }

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: bgColor }]}
            onPress={() => console.log("Social media pressed", type)}
        >
            <Vector name={iconName} size={22} color={"white"} />
        </TouchableOpacity>
    )
}

export default SingleSocialLink