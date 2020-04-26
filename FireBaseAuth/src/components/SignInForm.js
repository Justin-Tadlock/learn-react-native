import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Form, Label, Item, Input, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import * as firebase from "firebase";

const SignInForm = ({ navigation, signUp }) => {
  const [name, setName] = useState("Justin");
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("password");

  const createUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        return auth.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            navigation.navigate("Home");
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        navigation.navigate("Home");
      })
      .catch((err) => console.log(err.message));
  };

  const onSubmit = () => {
    signUp ? createUser() : signIn();
  };

  return (
    <Form style={styles.form}>
      {signUp ? (
        <Item floatingLabel>
          <Label>Name</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="words"
            keyboardType="default"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </Item>
      ) : null}
      <Item floatingLabel>
        <Label>Email</Label>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </Item>
      <Item floatingLabel>
        <Label>Password</Label>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </Item>
      <Button style={styles.button} full rounded onPress={() => onSubmit()}>
        <Text style={styles.buttonText}>{signUp ? "Sign Up" : "Sign In"}</Text>
      </Button>
    </Form>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
    width: "100%",
    marginBottom: 30,
  },
  button: {
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
  },
});

export default SignInForm;
