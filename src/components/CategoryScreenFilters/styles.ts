import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filterContainer:{
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginHorizontal: 5,
        marginVertical: 10,
        justifyContent:'space-between'
    },
    filterText:{
        fontSize: 12,
        fontWeight:'500',
        marginRight: 5,
        marginLeft: 5
    },
    altFilterContainer:{
        backgroundColor: 'grey',
        borderRadius: 15,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginHorizontal: 5,
        marginVertical: 10
    },
    altFilterText:{
        color:'white',
    },
    filterIconContainer:{
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight: 5
    },
    innerFilterContainer:{
        flexDirection:'row',
        alignItems:'center'
    }
})

export default styles;