 import React, { Component } from 'react';
 import { LogBox, View, Text } from 'react-native';
 import Router from './src/Router';
 import { Languages } from './src/common';
 
 class App extends Component {
   componentDidMount() {
     LogBox.ignoreLogs([
       'VirtualizedLists should never be nested', // turn off the warning because the Parallax layout need it.
       'componentWillMount has been renamed', // turn off untill we upgrade/replace tcomb-form-native and react-native-fluid-slider.
       'componentWillReceiveProps has been renamed', // turn off untill we upgrade/replace tcomb-form-native and react-native-fluid-slider.
     ]);
 
     const language = 'vi'; // store.getState().language;
     // set default Language for App
     Languages.setLanguage(language);
   }
 
   render() {
     return (
        <Router />
     );
   }
 }
 
 export default App;
 