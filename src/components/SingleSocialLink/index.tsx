import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather, AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';

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
        <TouchableOpacity style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: bgColor,
            marginHorizontal: 6,
            marginTop: 10
        }}
            onPress={() => console.log("Social media pressed", type)}
        >
            <Vector name={iconName} size={22} color={"white"} />
        </TouchableOpacity>
    )
}

export default SingleSocialLink