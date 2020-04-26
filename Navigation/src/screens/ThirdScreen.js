import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ThirdScreen = ({ navigation }) => {
  return (
    <View>
      <Text>ThirdScreen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to main page" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ThirdScreen;
