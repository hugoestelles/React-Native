import {StyleSheet, View, Image} from 'react-native';

const Imatges = (Props) => {
  return (
    <View style={styles.seccio2}>
      <View style={styles.fotos}>
        {Props.img.map((foto, index) => {
          return (
            <Image style={styles.foto} key={index} source={{uri: foto}}></Image>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  seccio2: {
    flex: 2,
    margin: 2,
    padding: 2,
    textAlign: 'right',
  },
  fotos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  foto: {
    height: '25%',
    width: '25%',
    aspectRatio: 1,
    borderColor: 'white',
    borderWidth: 2,
  },
});
export default Imatges;
