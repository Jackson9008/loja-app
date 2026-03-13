import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ product }) {

  const navigation = useNavigation();

  return (

    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DetalheProduto", { product })
      }
    >

      <View style={styles.card}>

        <Image
          source={{ uri: product.thumbnail }}
          style={styles.image}
        />

        <Text numberOfLines={2} style={styles.title}>
          {product.title}
        </Text>

        <Text style={styles.price}>
          R$ {product.price}
        </Text>

      </View>

    </TouchableOpacity>

  );

}

const styles = StyleSheet.create({

  card:{
    backgroundColor:"#fff",
    borderRadius:10,
    padding:10,
    elevation:3
  },

  image:{
    width:"100%",
    height:120,
    resizeMode:"contain",
    marginBottom:10
  },

  title:{
    fontSize:14,
    marginBottom:5
  },

  price:{
    fontWeight:"bold",
    color:"green"
  }

});