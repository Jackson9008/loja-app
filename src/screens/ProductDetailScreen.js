import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProductDetailScreen({ route }) {

  const { product } = route.params;

  const desconto = product.price * 0.9;

  return (

    <View style={styles.container}>

      <Image
        source={{ uri: product.thumbnail }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {product.title}
      </Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

      <Text style={styles.oldPrice}>
        R$ {product.price}
      </Text>

      <Text style={styles.discount}>
        Desconto: 10%
      </Text>

      <Text style={styles.price}>
        R$ {desconto.toFixed(2)}
      </Text>

    </View>

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
    resizeMode:"contain",
    marginBottom:20
  },

  title:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10
  },

  description:{
    fontSize:16,
    marginBottom:10
  },

  oldPrice:{
    textDecorationLine:"line-through",
    color:"#999"
  },

  discount:{
    color:"red",
    fontWeight:"bold"
  },

  price:{
    fontSize:22,
    color:"green",
    fontWeight:"bold"
  }

});