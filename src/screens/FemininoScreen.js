import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";

import api from "../services/api";
import ProductCard from "../components/ProductCard";

export default function FemininoScreen() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const screenWidth = Dimensions.get("window").width;

  const numColumns =
    screenWidth > 900
      ? 4
      : screenWidth > 600
      ? 3
      : 2;

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const response = await api.get("/products/category/womens-dresses");

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <FlatList
        key={numColumns}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <ProductCard product={item} />
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 10
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  itemContainer: {
    flex: 1,
    margin: 5
  }

});