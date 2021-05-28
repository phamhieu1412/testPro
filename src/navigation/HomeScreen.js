import React, { Component } from 'react';
import { View } from 'react-native';

import { Home } from '../containers';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
x
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Home navigation={navigation} />
      </View>
    );
  }
}

export default HomeScreen;
