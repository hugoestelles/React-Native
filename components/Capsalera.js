import {StyleSheet, View, Text, Image} from 'react-native';
import {Button} from 'react-native-paper';
import Informacio from './Informacio';
const localImg = require('./../imatges/visual-studio-code-card.png');

const Capsalera = Props => {
  return (
    <View style={styles.seccio1}>
      <Image source={localImg} style={styles.fotoLogo}></Image>
      <View style={styles.info}>
        <View style={styles.cuadrado1}>
          <Informacio tit={Props.tit1} val={Props.val1}></Informacio>
          <Informacio tit={Props.tit2} val={Props.val2}></Informacio>
          <Informacio tit={Props.tit3} val={Props.val3}></Informacio>
        </View>
        <View style={styles.cuadrado2}>
          <Button
            mode="contained"
            buttonColor="rgb(200,200,200)"
            textColor="black"
            labelStyle={{fontSize: 16}}
            style={{borderRadius: 2, width: 200}}>
            Edit Profile
          </Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  seccio1: {
    flex: 1,
    margin: 4,
    padding: 12,
    textAlign: 'right',
    flexDirection: 'row',
  },
  fotoLogo: {
    width: 125,
    height: 125,
    marginTop: 70,
    justifyContent: 'flex-start',
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 3,
  },
  info: {
    flex: 1,
    textAlign: 'right',
    marginTop: 60,
    marginLeft: 15,
    flexDirection: 'column',
  },
  cuadrado1: {
    flex: 1,
    margin: 1,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cuadrado2: {
    flex: 1,
    margin: 1,
    padding: 12,
  },
});
export default Capsalera;
