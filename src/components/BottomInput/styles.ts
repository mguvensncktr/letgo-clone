import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height: 130,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        shadowColor: '#000',
        shadowOpacity: 0.24,
    },
    bottomContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput:{
        marginBottom: 30,
        backgroundColor: '#e9e9e9',
        width: '78%',
        marginHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 10,

    },
    sendContainer:{
        marginBottom: 30,
        marginRight: 10,
    },
    sendText:{
        color: '#F24E61',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles