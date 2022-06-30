import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        marginHorizontal: 15
    },
    priceContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    priceLeftContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    price:{
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 5
    },
    favContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 38,
        height: 38,
        backgroundColor: '#e1e1e1',
        borderRadius: 19
    },
    name:{
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold'
    },
    infoContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
        marginLeft: 10
    },
    infoLeftContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 3
    },
    heat:{
        color: '#F24E61',
        marginLeft: 5
    },
    seen: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 3
    },
    seenText: {
        marginLeft: 5,
        color: '#959595'
    },
    descriptionContainer:{
        marginTop: 35
    },
    description:{
        fontSize: 16,
         fontWeight: '400'
    }
})

export default styles