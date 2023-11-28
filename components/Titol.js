/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Titol = () => {
  return (
    <View style={estils.contenedor}>
      <View style={estils.caixa1}>
        <Text style={{fontSize: 30, color: 'black'}}>Calculadora</Text>
      </View>
      <View style={estils.caixa2}>
        <Text style={{fontWeight: 'bold', color: 'red', fontSize: 30}}>I</Text>
        <Text style={{fontWeight: 'bold', color: 'green', fontSize: 30}}>
          M
        </Text>
        <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 30}}>C</Text>
      </View>
    </View>
  );
};

const estils = StyleSheet.create({
  contenedor: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  caixa1: {
    alignItems: 'center',
    textAlign: 'center',
  },
  caixa2: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Titol;
