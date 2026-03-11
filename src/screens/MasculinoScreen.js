import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

export default function MasculinoScreen() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
  try {

    const response = await api.get("/products");

    const masculino = response.data.filter(
      (item) => item.category === "men's clothing"
    );

    setProducts(masculino);

  } catch (error) {
    console.log(error);
  }
}

  return (
    <View style={styles.container}>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 10
  }
});