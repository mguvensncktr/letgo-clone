import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: '#f3f3f3',
        marginVertical: 10,
        shadowColor: "#f9f9f9",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2
    },
    upperContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding: 10,
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    infoContainer:{
        paddingHorizontal: 5,
        width: '75%'
    },
    priceContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    postPrice:{
        fontWeight:'bold',
        fontSize: 16,
    },
    description:{
        color: '#959595',
        fontWeight:'600'
    },
    divider:{
        borderWidth: 1,
        borderColor: '#f3f3f3',
        width: '90%',
        alignSelf:'center',
        marginVertical: 5
    },
    bottomContainerText:{
        color:'#F24E61',
        fontWeight:'bold'
    },
    bottomContainer:{
        margin: 15,
        alignItems:'center',
        justifyContent:'center',
    },
    shareContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal: 40,
        marginVertical: 15
    },
    shareButton:{
        color:'gray',
        fontWeight:'bold'
    },
chatButton:{
    color:'#F24E61',
    fontWeight:'bold'
}
})

export default styles