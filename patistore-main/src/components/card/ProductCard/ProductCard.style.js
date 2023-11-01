import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 8,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#eceff1',
        height: Dimensions.get('window').height / 2.5,
        flex: 1,
    },
    imageContainer: {
        resizeMode: "contain",
        borderRadius: 10,
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 3,
        backgroundColor: "#fff",
        margin: 8,
    },
    textRow: {
        justifyContent: "flex-start",
        alignItems: 'start',
        width: '100%',
    },
    imageContainerTitle: {
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    imageContainerPrice: {
        margin: 10,
        marginTop: 0,
        fontWeight: '500',
        color: 'grey',
        textAlign: 'left'
    },
    imageContainerInStock: {
        margin: 10,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center'
        
    }
});