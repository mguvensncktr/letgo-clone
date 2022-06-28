import { StyleSheet, Dimensions } from "react-native"

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        height: height * 0.13,
        marginBottom: 20,
        paddingHorizontal: 5,
        marginTop: 10
    }
})

export default styles