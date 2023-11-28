import {View, Text, StyleSheet} from 'react-native';


const Informacio = (Props) => {
  return (
    <View style={styles.cuadraditos}>
      <Text style={{color: 'black'}}>{Props.tit}</Text>
      <Text style={{color: 'black'}}>{Props.val}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    cuadraditos: {
      flex: 1,
      flexDirection: 'column',
    },
  });
export default Informacio;
