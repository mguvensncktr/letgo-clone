import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        width:'92%',
        marginHorizontal: '4%',
    },
    editTitleText:{
        color: "#F24E61",
        fontSize: 15,
        fontWeight: '500'
    },
    editTitleContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    mainTitle:{
        fontSize: 18,
        fontWeight:'bold'
    },
    titleContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 12,
        marginBottom: 10
    },
    mainProductsContainer:{
        flexDirection:'row',
        flexWrap: 'wrap',
        backgroundColor:'white',
        width:'100%',
        alignItems:'flex-start',
    }
})

export default styles;