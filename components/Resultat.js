import React from 'react';
import {Text, View} from 'react-native';

const Resultat = (props) => {
  return (
    <View>
      <Text style={{color: 'gray', fontSize: 20, textAlign: 'center'}}>
        {props.text}
      </Text>
      <Text style={{color: props.color, fontSize: 20, textAlign: 'center'}}>
        {props.textIMC}
      </Text>
    </View>
  );
};

export default Resultat;
