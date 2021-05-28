import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View, Image, Text, ActivityIndicator } from 'react-native';

import { Icon } from '../../Omni';
import { Color } from '../../common';

const Button = props => {
  if (props.type === 'border') {
    return <BorderButton {...props} />;
  } else if (props.type === 'image') {
    return <ImageButton {...props} />;
  } else if (props.type === 'text') {
    return <TextButton {...props} />;
  } else if (props.type === 'tab') {
    return <TabButton {...props} />;
  }
  return <StandardButton {...props} />;
};

Button.propTypes = {
  type: PropTypes.string,
};

const TextButton = props => (
  <TouchableOpacity
    disabled={props.disabled || props.isLoading}
    onPress={() => props.onPress()}
    style={[styles.button, props.style, props.disabled && { backgroundColor: '#ffb1bc' }]}
    activeOpacity={0.9}
    underlayColor="#ccc">
    <View style={styles.buttonView}>
      {props.icon && (
        <Icon name={props.icon} style={[styles.buttonIcon, props.iconStyle && props.iconStyle]} />
      )}
      <Text {...props} style={[styles.text, props.textStyle]}>
        {props.text}
      </Text>
      {props.isLoading && <ActivityIndicator style={styles.loading} color="#FFF" />}
    </View>
  </TouchableOpacity>
);

const BorderButton = props => (
  <TouchableOpacity
    disabled={props.disabled || props.isLoading}
    onPress={() => props.onPress()}
    style={[styles.button, props.style, props.disabled && { backgroundColor: '#ffb1bc' }]}
    activeOpacity={0.9}
    underlayColor="#ccc">
    <View style={styles.buttonView}>
      {props.icon && (
        <Icon name={props.icon} style={[styles.buttonIcon, props.iconStyle && props.iconStyle]} />
      )}
      <Text {...props} style={[styles.text, props.textStyle]}>
        {props.text}
      </Text>
      {props.isLoading && <ActivityIndicator style={styles.loading} color="#FFF" />}
    </View>
  </TouchableOpacity>
);

const StandardButton = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled || props.isLoading}
      onPress={() => props.onPress()}
      style={[styles.button, props.style, props.disabled ? { backgroundColor: '#ffb1bc' } : null]}
      activeOpacity={0.9}
      hitSlop={{ top: 5, right: 5, bottom: 5, left: 5 }}
      underlayColor="#ccc">
      <View style={[styles.buttonView, props.buttonView]}>
        {props.icon && (
          <Icon name={props.icon} style={[styles.buttonIcon, props.iconStyle && props.iconStyle]} />
        )}
        <Text {...props} style={[styles.text, props.textStyle]}>
          {props.text}
        </Text>
        {props.isLoading && <ActivityIndicator style={styles.loading} color="#FFF" />}
      </View>
    </TouchableOpacity>
  );
};

const ImageButton = props => (
  <TouchableOpacity
    disabled={props.disabled}
    onPress={() => props.onPress()}
    activeOpacity={0.8}
    underlayColor="#eeeeee"
    style={props.buttonStyle}>
    <Image
      {...props}
      defaultSource={props.defaultSource}
      style={[
        props.imageStyle,
        props.isAddWishList && { tintColor: Color.heartActiveWishList },
        props.isAddToCart && { tintColor: Color.product.TabActive },
      ]}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

const TabButton = props => (
  <TouchableOpacity onPress={() => props.onPress()} activeOpacity={0.8} selected={props.selected}>
    <View style={[styles.tabButton, props.buttonStyle, props.selected && styles.tabActive]}>
      <Text
        style={[
          styles.tabButtonText,
          props.textStyle,
          props.selected && styles.tabActiveText && props.selectedStyle,
        ]}>
        {props.text}
      </Text>
      <View style={[styles.tabIndicator, props.selected && styles.activeIndicator]} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tabActiveText: {
    color: Color.product.TabActiveText,
  },
  tabIndicator: {
    marginLeft: 10,
    marginTop: 10,
    textAlign: 'left',
    width: 60,
    height: 4,
    borderRadius: 4,
    backgroundColor: 'transparent',
  },
  activeIndicator: {
    backgroundColor: Color.product.TabActive,
  },
  // tabActive: {
  //   marginTop: 1,
  //   borderBottomWidth: 4,
  //   borderBottomColor: Color.product.TabActive,
  // },
  button: {
    backgroundColor: Color.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 20,
    marginRight: 8,
  },
  text: {
    color: 'white',
    fontSize: 17,
    // marginTop: 3,
  },
  borderButton: {
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
  },
  tabButton: {
    // height: 50,
    justifyContent: 'center',
  },
  tabButtonText: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'left',
    fontSize: 12,
  },
  loading: {
    marginLeft: 5,
  },
});

export default Button;
