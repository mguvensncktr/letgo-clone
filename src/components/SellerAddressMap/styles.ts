import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    map:{
        width: width - 30,
        height: height * 0.2,
        borderRadius: 15,
        marginTop: 20,
    },
    bottomContainer:{
        height: 60,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderWidth: 1,
        borderTopWidth: 0,
        marginTop: -10,
        borderColor: '#e5e5e5',
        justifyContent: 'center'
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10
    }
})

export default styles