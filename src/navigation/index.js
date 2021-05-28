import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigationRef } from './RootNavigation';
import HomeScreen from './HomeScreen';
import CustomTabScreen from './CustomTabScreen';

import { TabBarIcon } from '../components';
import { Color, Styles, Languages } from '../common';

const defaultHeaderStyle = {
  headerStyle: Styles.Common.toolbar(),
  headerTintColor: Color.headerTintColor,
  headerTitleStyle: Styles.Common.headerStyle,
};
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      headerMode="float"
      screenOptions={{
        ...defaultHeaderStyle,
        headerBackTitle: Languages.Back,
        tabBarVisible: true,
      }}
      gestureDirection="horizontal">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
function CustomTabStack() {
  return (
    <Stack.Navigator
      initialRouteName="CustomTabScreen"
      headerMode="float"
      screenOptions={{
        ...defaultHeaderStyle,
        headerBackTitle: Languages.Back,
        tabBarVisible: true,
      }}
      gestureDirection="horizontal">
      <Stack.Screen
        name="CustomTabScreen"
        component={CustomTabScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Color.tabbarTint,
        inactiveTintColor: Color.tabbarColor,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 13, color: focused ? Color.tabbarTint : Color.tabbarColor }}>
              {Languages.Home}
            </Text>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon icon="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="CustomTab"
        component={CustomTabStack}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 13, color: focused ? Color.tabbarTint : Color.tabbarColor }}>
              {Languages.Home}
            </Text>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon icon="home" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="App"
            component={AppStack}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
