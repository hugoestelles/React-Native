/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CalculadoraIMC from './components/CalculadoraIMC';
import Titol from './components/Titol';

const App = () => {
  

  return (
    <View style={estils.padre}>
      <StatusBar/>
      <Titol></Titol>
      <CalculadoraIMC></CalculadoraIMC>
    </View>
  );
}

const estils = StyleSheet.create({
  padre:{
    flex: 1,
  }
});

export default App;
