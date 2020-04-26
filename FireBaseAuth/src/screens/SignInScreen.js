import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  Container,
  Content,
  Header,
  Title,
  Form,
  Label,
  Item,
  Input,
  Button,
} from "native-base";

import SignInForm from "../components/SignInForm";

const SignInScreen = ({ navigation }) => {
  navigation.setOptions({
    headerShown: false,
  });

  return (
    <Container style={styles.container}>
      <Header>
        <Title style={{ alignSelf: "center" }}>Sign In</Title>
      </Header>
      <Content>
        <SignInForm navigation={navigation} />
      </Content>
      <View style={styles.footer}>
        <Text>OR</Text>
        <Button
          style={[styles.button, { marginHorizontal: 20 }]}
          full
          rounded
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.buttonText}>Create a new account</Text>
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "space-between",
  },
  button: {
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
  },
  footer: {
    alignItems: "center",
    marginBottom: 40,
  },
});

export default SignInScreen;
