import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import api from "../services/api";
import ProductCard from "../components/ProductCard";

export default function FemininoScreen() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {

    try {

      const response = await api.get("/products");

      const feminino = response.data.filter(
        (item) => item.category === "women's clothing"
      );

      setProducts(feminino);

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

  container:{
    flex:1,
    backgroundColor:"#eee",
    paddingTop:10
  }

});