import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to details screen ...again"
        onPress={() => navigation.push("Details")}
      />

      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Button
        title="Go to the first screen"
        onPress={() => navigation.popToTop()}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
