import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Container, Form, Input, Item, Button, Label } from "native-base";

const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    title: "LCO Chat Room",
    headerStyle: {
      backgroundColor: "#01CBC6",
    },
    headerTintColor: "#fff",
  });

  const [username, setUsername] = useState("");

  return (
    <Container style={styles.container}>
      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setUsername(text)}
          />
        </Item>
        <Button
          style={styles.button}
          full
          onPress={() => navigation.navigate("Chat", { username: username })}
        >
          <Text style={styles.btnFont}>Start Chat</Text>
        </Button>
      </Form>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#01CBC6",
    borderRadius: 5,
  },
  btnFont: {
    color: "#fff",
  },
});

export default HomeScreen;
