import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  SafeAreaView,
  Platform,
} from "react-native";
import { Content, Header, Title, Card, CardItem } from "native-base";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

export default App = () => {
  const [isContentLoading, setIsContentLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  let [fontsLoaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  });

  const getUserFromApi = () => {
    console.log("Query");
    return fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((responseJson) => {
        setIsContentLoading(false);
        setDataSource(dataSource.concat(responseJson.results));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserFromApi();
  }, []);

  if (isContentLoading && !fontsLoaded) {
    return (
      <View style={styles.contentLoading}>
        <ActivityIndicator size="large" color="#01CBC6" />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Header style={styles.header}>
        <Title style={styles.title}>Random People Api</Title>
      </Header>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => "" + index}
        renderItem={({ item }) => {
          return (
            <Card>
              <CardItem>
                <View style={styles.container}>
                  <Image
                    style={styles.profilePic}
                    source={{ uri: item.picture.medium }}
                  />
                  <View style={styles.userInfo}>
                    <Text>
                      Name: {item.name.title} {item.name.first} {item.name.last}
                    </Text>
                    <Text>Email: {item.email}</Text>
                    <Text>City: {item.location.city}</Text>
                    <Text>Phone: {item.phone}</Text>
                  </View>
                </View>
              </CardItem>
            </Card>
          );
        }}
        style={{ paddingHorizontal: 16 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#01CBC6",
    alignItems: "center",
  },
  title: {
    color: "white",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  profilePic: {
    flex: 2,
    width: 100,
    height: 100,
  },
  userInfo: {
    flex: 6,
    flexDirection: "column",
    marginStart: 16,
  },
});
