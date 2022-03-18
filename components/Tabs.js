import React from 'react'
import { View, Text } from 'react-native'
import Home from '../screens/Home'
import Login from '../screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
    )
}
