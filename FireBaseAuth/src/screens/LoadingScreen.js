import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import * as firebase from "firebase";

const LoadingScreen = ({ navigation }) => {
  navigation.setOptions({
    headerShown: false,
  });
  firebase.auth().onAuthStateChanged((authenticate) => {
    authenticate ? navigation.navigate("Home") : navigation.navigate("SignIn");
  });

  return (
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#01CBC6" />
    </View>
  );
};

export default LoadingScreen;
