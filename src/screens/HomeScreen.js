import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Catálogo de Produtos</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Masculino")}
      >
        <Text style={styles.buttonText}>Produtos Masculino</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Feminino")}
      >
        <Text style={styles.buttonText}>Produtos Feminino</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logout}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f7"
  },

  title: {
    fontSize: 28,
    marginBottom: 40,
    fontWeight: "bold"
  },

  button: {
    backgroundColor: "#3498db",
    padding: 15,
    width: 220,
    marginBottom: 15,
    borderRadius: 8,
    alignItems: "center"
  },

  logout: {
    backgroundColor: "#e74c3c",
    padding: 15,
    width: 220,
    marginTop: 30,
    borderRadius: 8,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }

});