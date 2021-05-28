import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// based on iphone 5s's scale
const scale = width / 320;

const Constants = {
  appStoreId: '1459204311',
  bundleId: 'vn.anvita.ubofood',
  appsflyerKey: 'ARDuQcYYMeAiZycPmvoQxg',
  useReactotron: false,
  Language: 'en', // ar, en. Default to set redux. Only use first time
  VND: '₫',
  fontFamily: 'OpenSans',
  fontHeader: 'OpenSans',
  fontHeaderAndroid: 'OpenSans',
  isoDateFormat: 'YYYY-MM-DD',
  displayDateFormat: 'DD-MM-YYYY',
  allCategorySlug: 'show-all-category',
  walletType: {
    UBOFOOD: 'UBOFOOD',
    COLLABORATOR: 'COLLABORATOR',
  },
  Filter: {
    maxPrice: 1000000,
    minPrice: 0,
    defaultPrice: 50000,
    priceStep: 10000,
  },
  AsyncCode: {
    Intro: 'async.intro',
  },
  EmitCode: {
    Toast: 'toast',
  },
  Dimension: {
    ScreenWidth(percent = 1) {
      return Dimensions.get('window').width * percent;
    },
    ScreenHeight(percent = 1) {
      return Dimensions.get('window').height * percent;
    },
  },
  Window: {
    width,
    height,
    headerHeight: (65 * height) / 100,
    headerBannerAndroid: (55 * height) / 100,
    profileHeight: (45 * height) / 100,
  },

  PostImage: {
    small: 'small',
    medium: 'medium',
    medium_large: 'medium_large',
    large: 'large',
  },
  tagIdBanner: 273, // cat ID for Sticky Products
  Layout: {
    card: 'card',
    twoColumn: 'twoColumn',
    simple: 'simple',
    list: 'list',
    advance: 'advance',
    threeColumn: 'threeColumn',
    horizon: 'horizon',
    twoColumnHigh: 'twoColumnHigh',
    Banner: 'banner',

    categoryBubbles: 'category-bubbles',
    posBasedPromotion: 'pos-based-promotion',
    BannerImage: 'bannerImage',
  },
  pagingLimit: 16,

  fontText: {
    size: 16,
  },
  productAttributeColor: 'color',
};

export const deviceWidth = width;
export const deviceHeight = height;
export const responsiveHeight = (h) => height * (h / 100);
export const responsiveWidth = (w) => width * (w / 100);
const breakpoints = {
  smallPhoneWidth: 320,
  smallPhoneHeight: 600,
  mediumPhoneWidth: 414,
  bigPhoneWidth: 480,
};
const isSmallScreen =
  width <= breakpoints.smallPhoneWidth || height <= breakpoints.smallPhoneHeight;
export const isNormalScreen = width > breakpoints.smallPhoneWidth && width < breakpoints.mediumPhoneWidth;
export const isBigScreen = width >= breakpoints.mediumPhoneWidth;
export const isBiggestPhoneScreen = width >= breakpoints.bigPhoneWidth;
export const isAndroid = Platform.OS === 'android';

export const getResponsiveFontSize = (fontSize) => {
  const newSize = fontSize * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const normalizedFontSize = (basicFontSize) => {
  if (isSmallScreen) {
    return basicFontSize - 6;
  }
  if (isNormalScreen) {
    return basicFontSize;
  }
  if (isBigScreen) {
    return basicFontSize + 1;
  }

  return basicFontSize;
};

export const scrollPosition = (scrollHeight, x) => x * 0.01 * scrollHeight;

export default Constants;
