import _Color from './Colors';
import _Constants from './Constants';
import _Config from './Config';
import _Images from './Images';
import _Languages from './Languages';
import _Styles from './Styles';
import _Layout from './Layout';
import _Validator from './Validator';
import _Device from './Device';
import _Sizes from './Sizes';

import _AppConfig from './AppConfig.json';

const _HorizonLayouts = _AppConfig.HorizonLayout;
if (_AppConfig.VerticalLayout) {
  _HorizonLayouts.push(Object.assign(_AppConfig.VerticalLayout, { isVertical: true }));
}

export const AppConfig = _AppConfig;

export const Color = _Color;
export const Constants = _Constants;
export const Config = _Config;
export const Images = _Images;
export const Languages = _Languages;
export const Styles = _Styles;
export const Layout = _Layout;

export const HorizonLayouts = _HorizonLayouts;
export const Validator = _Validator;
export const Device = _Device;
export const Sizes = _Sizes;
