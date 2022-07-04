import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding: 15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    ownerImage:{
        width: 34,
        height: 34,
        borderRadius: 17,
        position: 'absolute',
        bottom: 0,
        right: -15
    },
    verified:{
        backgroundColor:'#42eb05',
        justifyContent:'center',
        alignItems:'center',
        width: 16,
        height: 16,
        borderRadius: 8,
        position:'absolute',
        bottom: 0,
        right: -15
    },
    messageStatus:{
        flexDirection:'row',
        alignItems:'center',
        marginTop: 5
    },
    messageStatusText:{
        marginLeft: 5,
        color: '#999999',
        fontSize: 16,
    },
    infoContainer:{
        marginLeft: 30,
        flex:1
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    sellerTitle:{
        fontSize: 14,
        fontWeight:'400',
        marginTop: 5
    },
    date:{
        color: '#959595',
        marginLeft: 10,
    },
    divider:{
        borderWidth: 0.5,
       borderColor: '#959595',
       width: '100%',
       opacity: 0.5
    }
})

export default styles