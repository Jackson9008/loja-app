import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function ProductDetailScreen({ route }) {

  const { product } = route.params;

  const desconto = (product.price * 0.1).toFixed(2);
  const precoFinal = (product.price - desconto).toFixed(2);

  return (
    <ScrollView style={styles.container}>

      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.title}>{product.title}</Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

      <Text style={styles.price}>
        Preço: R$ {product.price}
      </Text>

      <Text style={styles.discount}>
        Desconto: R$ {desconto}
      </Text>

      <Text style={styles.final}>
        Preço Final: R$ {precoFinal}
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    backgroundColor:"#fff"
  },

  image:{
    width:"100%",
    height:250,
    resizeMode:"contain"
  },

  title:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:10
  },

  description:{
    marginTop:10,
    fontSize:16
  },

  price:{
    marginTop:15,
    fontSize:18,
    color:"green"
  },

  discount:{
    fontSize:16,
    color:"red"
  },

  final:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:10
  }

});