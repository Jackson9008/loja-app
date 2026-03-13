import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";

import api from "../services/api";
import ProductCard from "../components/ProductCard";

export default function FemininoScreen() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
      />

    </View>

  );

}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#eee",
    paddingTop:10
  },

  loading:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }

});