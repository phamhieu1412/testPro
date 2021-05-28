import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { Back, CartWishListIcons } from './IconNav';
import { setBarStyle, setTranslucent, setBackgroundColor, FocusAwareStatusBar } from '../ultils/statusBar';
import { CustomTab } from '../containers';
import { Languages, Styles } from '../common';

export default class CustomTabScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { navigation } = this.props;

    this.props.navigation.setOptions({
      headerTitle: Languages.Search,
      headerLeft: () => Back(navigation),
      headerRight: () => CartWishListIcons(navigation),

      headerTitleStyle: [
        Styles.Common.headerStyle,
        {
          color: 'black',
        },
      ],
    });

    this._navListener = this.props.navigation.addListener('focus', () => {
      setBarStyle('dark-content');
      setTranslucent(false);
      setBackgroundColor('transparent');
    });
  }

  componentWillUnmount() {
    this._navListener();
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
        <CustomTab />
      </View>
    );
  }
}
