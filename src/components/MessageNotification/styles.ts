import { StyleSheet, Dimensions } from "react-native"

const {width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#2C2C2C',   
        width: width,
        height: 45,
        justifyContent:'center',
        paddingHorizontal: 12,
    },
    innerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    leftContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    messageText:{
        color:'white',
        fontSize: 15,
        fontWeight:'400',
        marginLeft: 6
    }
})

export default styles