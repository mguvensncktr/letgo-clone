import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    innerContainer:{ 
        marginTop: 20,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between'
    },
    title:{
        color: '#959595',
        flex:1,
        marginLeft: 15,
        fontSize: 18,
        flexWrap:'wrap',
    },
    dateText:{
        color: '#959595',
        marginTop: 5,
        fontSize: 12
    },
    rightContainer:{
        alignItems:'center'
    },
    button:{
        width: 200,
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1,
        borderColor: '#F24E61',
        borderRadius: 20,
        paddingVertical: 5,
        marginLeft: 60,
        marginTop: 20
    },
    buttonText:{
        color: '#F24E61',
        fontSize: 14,
        fontWeight:'bold'
    },
    divider:{
        width:'100%',
        borderWidth: 0.5,
        borderColor: '#959595',
        opacity: 0.3,
        marginTop: 20
    }
})

export default styles