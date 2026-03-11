import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import MasculinoScreen from "./src/screens/MasculinoScreen";
import FemininoScreen from "./src/screens/FemininoScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";

const Stack = createNativeStackNavigator();

function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Masculino" component={MasculinoScreen} />
        <Stack.Screen name="Feminino" component={FemininoScreen} />
        <Stack.Screen name="DetalheProduto" component={ProductDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}