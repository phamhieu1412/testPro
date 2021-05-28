import { Dimensions, StyleSheet } from 'react-native';
import { Color } from '../../common';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
});

export default styles;