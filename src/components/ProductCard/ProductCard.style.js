import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    pCard_container: {
        height: 330,
        backgroundColor: "#e0e0e0",
        margin: 10,
        width: "44%",
        padding: 5,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    pCard_image: {
        height: 200,
        width: "100%",
        resizeMode: "contain",
        alignSelf: "center"
    },
    pCard_title: {
        fontSize: 17,
        fontWeight: "bold",
        color: "black"
    },
    pCard_stock: {
        color: "red",
        fontWeight: "bold",
        fontSize: 16,
    },
    pCard_body: {
        justifyContent: "space-between",
        flex: 1,
        marginBottom: 5,
    }
})