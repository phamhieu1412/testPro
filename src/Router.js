 import React from 'react';
 import { View } from 'react-native';
 
 import * as RootNavigation from './navigation/RootNavigation';
//  import MyToast from './containers/MyToast/index';
 import AppNavigator from './navigation/index';
 import { Styles, Color } from './common';
 
 class Router extends React.PureComponent {
   constructor(props) {
     super(props);
     this.state = {
     };
   }
 
   onViewNotification = item => {
     if (item.notificationId) this.props.setMessageRead(item.notificationId);
     if (item.orderNumber) {
       this.goToScreen('OrderDetailScreen', {
         orderNumber: item.orderNumber,
       });
     } else if (!item.type) {
       this.goToScreen('MyMessagesScreen');
     } else if (item.type === 'promotion') {
       this.goToScreen('ListAllScreen', {
         config: { name: 'hotDeal', predefined: 'hot-deal' },
         index: 1,
       });
     } else if (item.type === 'cart') {
       this.goToScreen('CartScreen');
     } else if (item.type === 'product') {
       this.goToScreen('DetailScreen', { product: { slug: `fake-${item.code}` } });
     } else if (item.type === 'category') {
       const { allCategories } = this.props;
       const findCategory = allCategories.find(cat => cat.code === item.code);
       if (findCategory) {
         this.goToScreen('CategoryScreen', {
           mainCategory: findCategory,
         });
       } else {
         this.goToScreen('MyMessagesScreen');
       }
     }
   };
 
   goToScreen = (routeName, params) => {
     RootNavigation.navigate(routeName, params);
   };
 
   render() {
     return (
       <View style={[Styles.app, { backgroundColor: Color.background }]}>
         {/* <MyToast /> */}
         <AppNavigator ref={comp => (this.navigator = comp)} />
       </View>
     );
   }
 }
 
 export default Router;
 