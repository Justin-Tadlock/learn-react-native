import React from "react";
import { View, Text, Button } from "react-native";
import * as firebase from "firebase";
import { BaseRouter } from "@react-navigation/native";

const HomeScreen = ({ route, navigation }) => {
  navigation.setOptions({
    headerShown: false,
  });

  const user = firebase.auth().currentUser;
  user ? null : navigation.navigate("SignIn");

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => navigation.navigate("Loading"))
      .catch((err) => console.log(err.message));
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{user.displayName}</Text>
      <Button title="Log out" onPress={() => signOut()} />
    </View>
  );
};

export default HomeScreen;
