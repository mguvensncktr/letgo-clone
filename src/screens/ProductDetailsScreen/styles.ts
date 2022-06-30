import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    container: {
        flex: 1,
         backgroundColor: 'white'
    }, 
    headerContainer: {
        marginTop: 30, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: 15
    },
    headerLeftContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    }, 
    headerLeft: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        width: 30, 
        height: 30, 
        borderRadius: 15, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    headerLeft2: {
        marginLeft: 10, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection:'row',
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    headerRight: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
         width: 30, 
         height: 30, 
         borderRadius: 15, 
         alignItems: 'center', 
        justifyContent: 'center'
    }, 
    topListingText:{
        fontWeight:'bold',
        fontSize: 16,
        color:'white'
    }

})

export default styles