/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Button, TextInput, Text} from 'react-native-paper';
import Resultat from './Resultat';

const CalculadoraIMC = () => {
  const [pes, setPes] = useState(0);
  const [altura, setAltura] = useState(0);
  const [missatge, setMissatge] = useState({
    text: '',
    color: 'gray',
    textIMC: '',
  });
  const [errors, setErrors] = useState({
    errorPes: '',
    errorAltura: '',
    valid: false,
  });

  const handleCalcular = () => {
    let result = pes / Math.pow(altura, 2);
    if (result < 18.5) {
      setMissatge({
        text: 'El resultat es: Peso Insuficiente',
        color: 'green',
        textIMC: 'El teu IMC es de: ' + result.toFixed(2),
      });
    } else if (result < 24.9) {
      setMissatge({
        text: 'El resultat es: NormoPeso',
        color: 'green',
        textIMC: 'El teu IMC es de: ' + result.toFixed(2),
      });
    } else if (result < 26.9) {
      setMissatge({
        text: 'El resultat es: Sobrepeso grado 1',
        color: 'green',
        textIMC: 'El teu IMC es de: ' + result.toFixed(2),
      });
    } else if (result < 29.9) {
      setMissatge({
        text: 'El resultat es: Sobrepeso grado 2',
        color: 'orange',
        textIMC: 'El teu IMC es de: ' + result.toFixed(2),
      });
    } else if (result < 34.9) {
      setMissatge({
        text: 'El resultat es: Obesidad grado 1',
        color: 'orange',
        textIMC: 'El teu IMC es de: ' + result.toFixed(2),
      });
    } else if (result < 39.9) {
      setMissatge({
        text: 'El resultat es: Obesidad grado 2',
        color: 'orange',
        textIMC: 'El teu IMC es de: ' + result.toFixed(2),
      });
    } else if (result < 49.9) {
      setMissatge({
        text: 'El resultat es: Obesidad grado 3',
        color: 'red',
        textIMC: 'El teu IMC es de: ' + result.toFixed(2),
      });
    } else if (result > 50) {
      setMissatge({
        text: 'El resultat es: Obesidad grado 4',
        color: 'red',
        textIMC: 'El teu IMC es de: ' + result.toFixed(2),
      });
    }
  };
  const handleComprobacions = () => {
    const numeric = /^(\d+)$|^(\d*\.\d+)$/;
    if (!numeric.test(pes)) {
      setErrors({
        errorPes: 'Escriu el pes en Kg i amb valors positius (ex:50.5)',
        errorAltura: errors.errorAltura,
        valid: false,
      });
    } else if (!numeric.test(altura)) {
      setErrors({
        errorPes: errors.errorPes,
        errorAltura: 'Escriu la alçada en m i amb valors positius (ex:1.25)',
        valid: false,
      });
    } else if (pes <= 0) {
      setErrors({
        errorPes: 'El pes ha de ser major de 0 Kg.',
        errorAltura: errors.errorAltura,
        valid: false,
      });
    } else if (altura <= 0) {
      setErrors({
        errorPes: errors.errorPes,
        errorAltura: 'La alçada ha de ser major de 0 .',
        valid: false,
      });
    } else {
      setErrors({errorPes: '', errorAltura: '', valid: true});
      setMissatge({text: '', color: 'gray', textIMC: ''});
    }
  };

  return (
    <View>
      <StatusBar />
      <View style={estils.dades}>
        <View style={estils.caixa1}>
          <View>
            <TextInput
              mode="outlined"
              outlineColor="green"
              activeOutlineColor="green"
              keyboardType="decimal-pad"
              label="Pes: (Kg)"
              onChangeText={text => setPes(Number(text))}
              onBlur={() => handleComprobacions()}
              right={<TextInput.Affix text="Kg." />}
            />
            <TextInput
              mode="outlined"
              outlineColor="orange"
              activeOutlineColor="orange"
              keyboardType="decimal-pad"
              label="Alçada: (m)"
              onChangeText={txt => setAltura(Number(txt))}
              onBlur={() => handleComprobacions()}
              right={<TextInput.Affix text="m." />}
            />
          </View>
        </View>
        <View style={estils.caixa2}>
          <View style={estils.error1}>
            <Text style={estils.textError}>{errors.errorPes}</Text>
          </View>
          <View style={estils.error2}>
            <Text style={estils.textError}>{errors.errorAltura}</Text>
          </View>
        </View>
      </View>
      {errors.valid && (
        <View style={estils.boton}>
          <Button
            style={{width: '100%', borderRadius: 50}}
            mode="contained"
            icon="calculator"
            onPress={() => handleCalcular()}>
            Calcular
          </Button>
        </View>
      )}
      {errors.valid && (
        <Resultat
          color={missatge.color}
          text={missatge.text}
          textIMC={missatge.textIMC}></Resultat>
      )}
    </View>
  );
};

const estils = StyleSheet.create({
  titul: {
    textAlign: 'center',
    fontSize: 30,
    justifyContent: 'center',
    margin: 30,
  },
  boton: {
    alignItems: 'center',
    borderRadius: 0,
    margin: 30,
  },
  padre: {
    flexWrap: 1,
  },
  dades: {
    flexDirection: 'row',
  },
  caixa1: {
    flex: 1,
  },
  caixa2: {
    flex: 1,
  },
  error1: {
    flex: 1,
  },
  error2: {
    flex: 1,
  },
  textError: {
    fontSize: 15,
    color: 'red',
  },
});

export default CalculadoraIMC;
