import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Container, Form, Input, Item, Button, Label } from "native-base";

import GiftedChatComponent from "../components/GiftedChatComponent";

const ChatScreen = ({ route, navigation }) => {
  //j
  navigation.setOptions({
    title: "LCO Chat Room",
    headerStyle: {
      backgroundColor: "#01CBC6",
    },
    headerTintColor: "#fff",
  });

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <GiftedChatComponent username={route.params.username} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
});

export default ChatScreen;
