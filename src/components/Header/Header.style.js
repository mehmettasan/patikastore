import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        alignSelf: "flex-start",
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "purple",
    },
    searchInput: {
        backgroundColor: "#e0e0e0",
        minWidth: "100%",
        borderRadius: 10,
        padding: 10,
        fontSize: 17,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})