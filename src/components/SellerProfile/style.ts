import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30
    },
    leftContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 44,
        height: 44,
        borderRadius: 22,
    },
    nameContainer:{
        marginLeft: 5
    },
    nameText:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    ratingContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    star: { paddingHorizontal: 3 }
})

export default styles