import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import RNParallaxHeader from '../RNParallaxHeader';
import { Styles, Device, Color } from '../../common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

class ParallaxHeader extends Component {
  constructor(props) {
    super(props);

    this.state = { textColor: Color.background };
  }

  render() {
    const {
      renderNavBar,
      renderContent,
      backgroundImage,
      onPressImage,
      // backgroundColor,
      autoPlayImage,
      headerMaxHeight,
      onChangeStatusBarStyle,
      setEndReached,
    } = this.props;
    const headerHeight =
      Styles.headerHeight + Styles.statusBar.height + (Device.isIphoneX ? 20 : 25);

    return (
      <View style={styles.container}>
        <RNParallaxHeader
          headerMinHeight={headerHeight}
          headerMaxHeight={backgroundImage ? headerMaxHeight || 200 : headerHeight}
          extraScrollHeight={100}
          navbarColor={Color.background}
          // title="Ubofood"
          // titleStyle={styles.titleStyle}
          backgroundImage={backgroundImage}
          onPressImage={onPressImage}
          autoPlayImage={autoPlayImage}
          // backgroundColor={backgroundColor}
          backgroundImageScale={1.2}
          onChangeStatusBarStyle={onChangeStatusBarStyle}
          renderNavBar={renderNavBar}
          renderContent={renderContent}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          setEndReached={setEndReached}
          innerContainerStyle={styles.container}
        />
      </View>
    );
  }
}

export default ParallaxHeader;
