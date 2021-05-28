/** @format */

import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import { IconIO } from '../../Omni';
import { Color, Styles } from '../../common';

const defaultSearchTerms = [
  'Thịt lợn sinh học',
  'Trứng gà ác',
  'Sữa chua nếp cẩm',
  'Nem chay',
  'Cá ngừ salat',
  'Bột canh Hải châu',
  'Dầu ăn hướng dương',
];

class NavigationBarSearch extends Component {
  constructor(props) {
    super(props);
    const { appConfig } = this.props;
    const randomSearchTerms =
      appConfig && appConfig.searchKeywords && appConfig.searchKeywords.length
        ? appConfig.searchKeywords
        : defaultSearchTerms;
    const term = randomSearchTerms[Math.floor(Math.random() * randomSearchTerms.length)];
    this.state = { term };
  }

  render() {
    const { onPress, colorScheme } = this.props;
    const { term } = this.state;
    const background = colorScheme && colorScheme === 'light' ? Color.background : '#EFEFF4';

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.iconWrap, Styles.Common.Row, { backgroundColor: background }]}>
        <IconIO
          name="md-search"
          style={[
            styles.icon,
            // { tintColor: iconColor },
            {color: '#848484'},
          ]}
          resizeMode="contain"
          size={20}
        />
        <Text style={styles.searchTerm}>{term}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  iconWrap: {
    flexDirection: 'row',
    left: 10,
    width: Math.min(251, Styles.width - 131),
    alignItems: 'center',
    height: 33,
    opacity: 0.8,
    backgroundColor: '#EFEFF4',
    borderRadius: 16.5,
    padding: 3,
    marginLeft: Platform.OS === 'ios' ? 10 : 5,
  },
  searchTerm: {
    fontSize: 14,
    // lineHeight: 28,
    color: '#848484',
    marginLeft: 15,
  },
  icon: {
    marginLeft: 5,
  },
});

export default NavigationBarSearch;
