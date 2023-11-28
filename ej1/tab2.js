import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";

const Tab2 = () => {
  const [input, setInput] = useState("");
  const [players, setPlayers] = useState([]);
  const [firstPagePlayers, setFirstPagePlayers] = useState([]);
  const [page, setPage] = useState(1);

  const getPlayers = async () => {
    try {
      const response = await fetch(
        `https://www.balldontlie.io/api/v1/players?search=${input}&page=${page}`
      );
      const data = await response.json();
      if (page === 1) setFirstPagePlayers(data.data);

      if (data.data && data.data.length > 0) {
        setPlayers(data.data);
      } else {
        setPlayers(firstPagePlayers);
        setPage(1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonPress = () => {
    const newPage = page + 1;
    setPage(newPage);
    getPlayers();
  };

  const handleOnPress = () => {
    setPage(1);
    getPlayers();
  };

  const renderPlayer = (item) => {
    return (
      <View key={item.id}>
        <Text>
          {item.first_name} {item.last_name}
        </Text>
        <Text>{item.position}</Text>
        <Text>{item.team.abbreviation}</Text>
      </View>
    );
  };

  return (
    <View>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Buscar jugador"
      />
      <Button title="Buscar" onPress={() => handleOnPress()} />
      <Button title="Siguientes" onPress={() => handleButtonPress()} />
      <ScrollView>{players.map((item) => renderPlayer(item))}</ScrollView>
    </View>
  );
};

export default Tab2;
