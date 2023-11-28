import React, { useState } from "react";
import { Button, Text, View, Image } from "react-native";

const Tab1 = () => {
  const [characters, setCharacters] = useState([]);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [indice, setIndice] = useState(1);
  const [max, setMax] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      const data = await response.json();
      setCharacters(data.results);
      setCharacterIndex(0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const loadCharacters = async (page) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setCharacterIndex(0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const loadCharacter = (index) => {
    const newIndex = (index + characters.length) % characters.length; // Lógica circular
    setCharacterIndex(newIndex);
  };

  const nextPage = () => {
    const newIndex = indice + 1;
    loadCharacters(newIndex);
    setIndice(newIndex);
    setMax(Math.max(max, newIndex)); // Actualizar max solo si el nuevo índice es mayor
  };

  const previousPage = () => {
    const newIndex = indice === 1 ? max : indice - 1;
    loadCharacters(newIndex);
    setIndice(newIndex);
  };

  const character = characters[characterIndex];

  return (
    <View>
      <Button title="Ricky y Morty" onPress={fetchData} />
      {character && (
        <View>
          <Image
            source={{ uri: character.image }}
            style={{ width: 200, height: 200 }}
          />
          <Text>{character.name}</Text>
          <Text>{character.species}</Text>
          <Text>{character.status}</Text>
          <Text>Posicion: {characterIndex}</Text>
        </View>
      )}
      <Button
        title="Anterior"
        onPress={() => loadCharacter(characterIndex - 1)}
      />
      <Button
        title="Siguiente"
        onPress={() => loadCharacter(characterIndex + 1)}
      />
      <Button title="Cargar Anteriores" onPress={() => previousPage()} />
      <Button title="Cargar Siguientes" onPress={() => nextPage()} />
      <Text>Indice: {indice}</Text>
    </View>
  );
};

export default Tab1;
