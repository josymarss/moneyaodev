import React from "react";
import { Text, Button, View } from "react-native";

export default function Home({ navgation }) {
  function navigateToUsers() {
    navgation.navgate(Users);
  }
  return (
    <View>
      <Text>Users</Text>
      <Button title="Go to users" onPress={navigateToUsers} />
    </View>
  );
}
