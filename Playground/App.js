import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SocialIcon } from "react-native-elements";

import CardImageScreen from "./src/screens/CardImageScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CardImage" component={CardImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
