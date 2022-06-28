import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        width: width*0.29,
    },
    imageContainer:{
        width: width*0.27,
        height: width*0.27 ,
    },
    image:{
        width: '100%',
        height:'100%',
        borderRadius: 10,
    },
    heart:{
        position:'absolute',
        right: 8,
        bottom: 5
    },
    isFeaturedContainer:{
        backgroundColor:'white',
        position:'absolute',
        top:20,
        right: -4,
        transform: [{rotate:"45deg"}],
        paddingVertical: 3,
        paddingHorizontal: 10
    },
    isFeaturedText:{
        fontSize: 10,
        fontWeight: '600'
    },
    mainProductContainer: {
        width: width * 0.46,
        height: width * 0.46,
        alignItems:'center'
    },
    mainProductImageContainer: {
        width: width * 0.43,
        height: width * 0.43
    }
})

export default styles