import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (username === "" || password === "") {
      alert("Preencha usuário e senha");
      return;
    }

    navigation.navigate("Home");

  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bem-vindo</Text>

      <TextInput
        placeholder="Usuário"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#2E86DE"
  },

  title: {
    fontSize: 28,
    color: "white",
    marginBottom: 30,
    fontWeight: "bold",
    textAlign: "center"
  },

  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15
  },

  button: {
    backgroundColor: "#1B4F72",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }

});