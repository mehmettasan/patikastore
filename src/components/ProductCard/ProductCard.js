import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({ product }) => {
    return (
        <View style={styles.pCard_container}>
            <Image style={styles.pCard_image} source={{ uri: product.imgURL }} />
            <View style={styles.pCard_body}>
                <View>
                    <Text style={styles.pCard_title}>{product.title}</Text>
                    <Text>{product.price}</Text>
                </View>
                {!product.inStock ?
                    <Text style={styles.pCard_stock}>Stokta Yok</Text>
                    : null}
            </View>
        </View>
    )
}

export default ProductCard;