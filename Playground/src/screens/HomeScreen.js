import React from "react";
import { View, Button, FlatList, StyleSheet } from "react-native";

const navBtns = [
  { title: "Card Image", routeName: "CardImage" },
  { title: "Card Image1", routeName: "CardImage" },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={navBtns}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.btn}>
              <Button
                title={item.title}
                onPress={() => navigation.navigate(item.routeName)}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    marginBottom: 10,
  },
});

export default HomeScreen;
