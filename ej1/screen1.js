import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Screen1 = () => {
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState("");
  const [result, setResult] = useState("");

  const handleOnPress = () => {
    setResult("");
    if (!isNaN(parseInt(rows))) {
      const newMessage = transform(message, parseInt(rows));
      setResult(newMessage);
    }

    setMessage("");
    setRows("");
  };

  const transform = (text, numRows) => {
    const splitMessage = text.split(" ").join("").split("");

    const rows = Array(numRows).fill("");

    for (let i = 0; i < splitMessage.length; i++) {
      rows[i % numRows] += splitMessage[i] + "   ";
    }

    return rows.join("\n");
  };

  return (
    <View>
      <Text>Mensaje:</Text>
      <TextInput
        style={styles.text}
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Text>Numero de filas:</Text>
      <TextInput
        style={styles.text}
        keyboardType="numeric"
        value={rows}
        onChangeText={(text) => setRows(text)}
      />
      <Button title="Pulsa" onPress={() => handleOnPress()} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: 30,
    margin: 5,
    color: "white",
    backgroundColor: "blue",
  },
  result: {
    margin: 40,
    textAlign: "center",
  },
});

export default Screen1;
