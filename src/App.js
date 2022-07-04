import React from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import product_data from "./data.json";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";

const App = () => {
  const renderProductCard = ({ item }) => <ProductCard product={item} />
  const keyExtractorFunc = (item) => item.id;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header />
      <FlatList
        data={product_data}
        renderItem={renderProductCard}
        keyExtractor={keyExtractorFunc}
        numColumns="2"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
})

export default App;