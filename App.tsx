import {StyleSheet, View, Dimensions} from 'react-native';
import Capsalera from './components/Capsalera';
import Imatges from './components/Imatges';

const screenWidth = Dimensions.get('window').width;

const ArrayImagens = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];
const App = () => {
  return (
    <View style={styles.contenidor}>
      <Capsalera
        tit1="Post"
        val1="20"
        tit2="Following"
        val2="110304"
        tit3="Followers"
        val3="1103"></Capsalera>
      <Imatges img={ArrayImagens}></Imatges>
    </View>
  );
};

//Estils a utilitzar
const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
