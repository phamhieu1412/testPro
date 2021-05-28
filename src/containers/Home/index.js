 import React, { Component } from 'react';
 import { View } from 'react-native';
 
import TabbedHeader from '../../components/TabbedHeader/index';

 class Home extends Component {
 
   render() {
 
     return (
       <View style={{ flex: 1 }}>
         <TabbedHeader {...this.props}/>
       </View>
     );
   }
 }
 
 export default Home;
 