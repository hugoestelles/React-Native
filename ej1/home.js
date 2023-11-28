import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to screen 1"
        onPress={() => navigation.navigate("Screen1")}
      />
      <Button
        title="Go to screen 2"
        onPress={() => navigation.navigate("Screen2")}
      />
    </View>
  );
};

export default Home;
