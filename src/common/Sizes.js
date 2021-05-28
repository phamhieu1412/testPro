import { Platform } from 'react-native';
import Device from './Device';
import { responsiveHeight } from './Constants';

export default {
  toolbarHeight: 100,
  headerHeight: Device.ifIphoneX(92, responsiveHeight(13)),
  cardScreenHeaderHeight: Platform.select({ ios: Device.ifIphoneX(95, 85), android: 100 }),
  userModalHeaderHeight: Device.ifIphoneX(100, 75),
  homeScreenParallaxHeader: Device.ifIphoneX(
    responsiveHeight(38),
    responsiveHeight(48)
  ),
  cardScreenParallaxHeader: Device.ifIphoneX(
    responsiveHeight(43),
    responsiveHeight(53)
  ),
  userScreenParallaxHeader: Device.ifIphoneX(
    responsiveHeight(43),
    responsiveHeight(53)
  ),
  hitSlop: {
    top: 15,
    left: 15,
    bottom: 15,
    right: 15,
  },
};
