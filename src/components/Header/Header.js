import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./Header.style";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>PATIKASTORE</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="ara..."
            />
        </View>
    )
}

export default Header;