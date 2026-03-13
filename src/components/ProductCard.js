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

        <Image source={{ uri: product.thumbnail }} style={styles.image} />

        <Text style={styles.title}>
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
  margin:8,
  width:160,

  shadowColor:"#000",
  shadowOffset:{width:0,height:2},
  shadowOpacity:0.25,
  shadowRadius:3.84,

  elevation:5
},
  image:{
    width:"100%",
    height:120,
    resizeMode:"contain"
  },

  title:{
    fontSize:14,
    marginTop:5
  },

  price:{
    color:"green",
    fontWeight:"bold"
  }

});