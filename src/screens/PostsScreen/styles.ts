import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding: 15
    },
    headers:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical: 5,
        backgroundColor:'white'
    },
    activeHeaderText:{
        color: '#F24E61',
        fontWeight:'600',
        fontSize: 16,
        marginBottom: 10
    },
    inActiveHeaderText:{
        fontWeight: '600',
        color:'#959595',
        fontSize: 16, 
        marginBottom: 10
    }, 
    activeHeaderLine:{
        borderWidth: 1.5,
        borderColor: '#F24E61',
        borderRadius: 5,
    },
})

export default styles