import { StyleSheet } from 'react-native';

import { Color } from '../../common';
import { screenStyles } from '../../common/Styles';

const styles = StyleSheet.create({
  ...screenStyles,
  logo: {
    height: 24,
    width: 142,
  },
  tabsWrapper: {
    paddingVertical: 12,
  },
  tabTextContainerStyle: {
    backgroundColor: Color.transparent,
    borderRadius: 18,
  },
  tabTextContainerActiveStyle: {
    backgroundColor: Color.darkMint,
  },
  tabText: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: Color.white,
  },
  modalStyle: {
    margin: 0,
  },
  modalContentContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  homeScreenHeader: {
    backgroundColor: Color.primaryGreen,
  },
});

export default styles;