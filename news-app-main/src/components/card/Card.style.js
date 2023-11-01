import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.5,
    },
    imageContainer: {
        height: Dimensions.get('window').height / 4,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 5,
        marginBottom: 0,
    },
    description: {
        fontSize: 14,
        marginTop: 3,
        marginBottom: 10,
        margin: 5,
    },
    author: {
        margin: 5,
        textAlign: 'right',
        fontStyle: "italic",
    }
});