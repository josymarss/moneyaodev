import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from "../screens/Home";
import Users from "../screens/Users";

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{}} />
      <Stack.Screen
        name="Users"
        component={Users}
        options={{ title: "User page" }}
      />
    </Stack.Navigator>
  );
}
