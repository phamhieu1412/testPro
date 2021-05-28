import { StyleSheet, Platform } from 'react-native';

import { Color } from '../../common';
import { isAndroid } from '../../common/Constants';

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    shadowColor: Color.shadowColor,
    shadowOffset: {
      width: 2,
      heght: 2,
    },
    shadowRadius: 40,
    shadowOpacity: 0.08,
    width: '100%',
    backgroundColor: Color.white,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderColor: Color.paleGrey,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  labelTextContainer: {
    backgroundColor: Color.paleGrey,
    borderRadius: 16,
  },
  labelText: {
    fontSize: 12,
    lineHeight: 16,
    color: Color.greyishBrown,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  iconContainer: {
    flexDirection: 'row',
    padding: 8,
    borderRadius: 8,
    shadowColor: Color.shadowColor,
    shadowOffset: {
      width: 0,
      heght: 2,
    },
    shadowRadius: 32,
    shadowOpacity: 0.016,
    backgroundColor: Color.purplishBlue,
    width: 56,
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
  number: {
    color: Color.white,
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 20,
  },
  mainText: {
    fontSize: 24,
    lineHeight: 28,
    color: Color.black,
    letterSpacing: -0.2,
    paddingTop: 8,
  },
  mainTextContainer: {},
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 22,
  },
  authorPhoto: {
    width: 24,
    height: 24,
    borderRadius: isAndroid ? 50 : 8,
  },
  authorName: {
    fontSize: 12,
    lineHeight: 16,
    color: Color.black,
    paddingLeft: 8,
  },
  authorWrapper: {
    flexDirection: 'row',
  },
  authorContainer: {
    paddingRight: 40,
  },
  authorBlankContainer: {
    width: '38%',
  },
  iconCardElement: {
    paddingLeft: 8,
  },
});

export default styles;