import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SecondScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SecondScreen</Text>
      <Button
        title="Third Screen"
        onPress={() => navigation.navigate("Third")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to main page" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SecondScreen;
