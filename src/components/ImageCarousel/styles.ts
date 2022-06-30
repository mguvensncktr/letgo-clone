import { StyleSheet, Dimensions } from "react-native"

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    image: {
        width: width,
        height: height * 0.4
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor:'#959595',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        width: 10,
        height: 10,
        backgroundColor:'white',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    dots:{
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        bottom: 10,
        right: 15,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5

    }
})

export default styles