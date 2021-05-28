import React, { Component } from 'react';
import { View } from 'react-native';

import NavigationBarIcon from '../NavigationBarIcon';
import { Styles } from '../../common';

class CartIcons extends Component {
  render() {
    const {
      color,
      navigation,
      numberColor,
      withSearch,
      withWishlist,
      noCart,
    } = this.props;
    const totalCart = 2;

    return (
      <View style={Styles.Common.Row}>
        {withSearch && (
          <NavigationBarIcon
            icon="search"
            onPress={() => navigation.navigate('SearchScreen')}
            color={color}
            css={{ marginRight: 0 }}
          />
        )}
        {withWishlist && (
          <NavigationBarIcon
            icon="heart"
            // number={wishListTotal}
            numberColor={numberColor}
            onPress={() => navigation.navigate('WishListScreen')}
            color={color}
            css={!noCart && { marginRight: 0 }}
          />
        )}
        {!noCart && (
          <NavigationBarIcon
            icon="cart"
            number={totalCart}
            numberColor={numberColor}
            onPress={() => navigation.navigate('CartScreen')}
            color={color}
          />
        )}
      </View>
    );
  }
}

export default CartIcons;
