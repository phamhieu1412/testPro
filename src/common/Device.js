import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const isIphoneX =
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (height >= 812 || width >= 812);

function _isIphoneX() {
  const dimen = Dimensions.get('window');

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812 || dimen.height === 896 || dimen.width === 896)
  );
}

function ifIphoneX(iphoneXStyle, regularStyle) {
  if (_isIphoneX()) {
    return iphoneXStyle;
  }

  return regularStyle;
}

function getSafelyScrollNode(scrollNode) {
  // after react-native 0.62
  if (scrollNode && scrollNode.scrollTo) return scrollNode;

  // before react-native 0.62
  return scrollNode.getNode();
}

function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null) {
    // eslint-disable-next-line no-param-reassign
    ref.current = value;
  }
}

export default {
  isIphoneX,
  ToolbarHeight: Platform.OS === 'ios' ? (isIphoneX ? 35 : 0) : 0,
  HeaderHeight: Platform.OS === 'ios' ? (isIphoneX ? 44 : 44) : 56,
  _isIphoneX,
  ifIphoneX,
  getSafelyScrollNode,
  setRef,
};