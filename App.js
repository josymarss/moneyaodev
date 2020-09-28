import "react-native-gesture-handler";
import React from "react";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function navinext() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
