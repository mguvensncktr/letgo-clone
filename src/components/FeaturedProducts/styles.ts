import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginLeft: '4%',
        width: '96%'
    },
    featuredHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: 10,
        marginRight: '4%'
    },
    seeAllTextContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    featuredHeaderText:{
        fontSize: 18,
        fontWeight:'bold',
    },
    seeAllText:{
        color: '#F24E61',
        fontWeight:'500',
        fontSize: 15
    }
})

export default styles;