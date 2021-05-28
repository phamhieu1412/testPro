import { Dimensions, StyleSheet } from 'react-native';
import { Color } from '../../common';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },

  headerCotainer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.primary,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    width: windowWidth - 15 - 15,// paddingHorizontal=15 of headerCotainer
  },
  headerLeftWrapper: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    width: (windowWidth - 15 - 15) * 0.8,
  },
  headerRightWrapper: {
    flexDirection: 'row',
    width: (windowWidth - 15 - 15) * 0.2,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerImage: {
    width: 20,
    height: 20
  },
  headerText: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 40,
    backgroundColor: 'rgba(0,0,0,0.6)',
    backgroundColor: 'red',
  },
  tabTextContainerStyle: {
    backgroundColor: 'transparent',
    borderRadius: 18
  },
  tabTextContainerActiveStyle: {
    backgroundColor: '#FFC106',
  },
  tabTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'white',
  },
  tabTextActiveStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'black',
  },
  tabWrapperStyle: {
    paddingVertical: 10
  },
  tabsContainerStyle: {
    paddingHorizontal: 10
  },
  contentContiner: {
    height: windowHeight,
    padding: 10
  },
  contentText: {
    fontSize: 16
  },
});

export default styles;