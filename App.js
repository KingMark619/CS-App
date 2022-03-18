import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,} from 'react-native';
import store from './store/Store';
import { Provider } from 'react-redux'


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './components/Tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Home,
  Appointment, 
  Login, 
  SignUp,
  Messages,
  Onboarding,
  Log,
  Search,
  DoctorProfile,
  Chat} from './screens/Index'

import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


const email = 'hello@idjgyg.com'
  const password = 'blaueeh'

const handleSignUp = () => {
  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  console.log('email, password')
}
export default function App() {
  function Hom() {
    return (
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: "#ffffff",
        tabBarActiveBackgroundColor: "#ffffff",
        tabBarInactiveTintColor: "#6C7696",
        tabBarActiveTintColor: "#4368F6",
      }}>
        <Tab.Screen 
          name="Main"
          component={Home}  
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={24} color={color} />
                  ),
            }} />
        <Tab.Screen 
          name="Appointment" 
          component={Appointment}
          options={{
            tabBarLabel: 'Appointment',
            tabBarIcon: ({ color, size }) => (
              <Feather name="calendar" size={24} color={color} />
                  ),
            }} 
           />
        <Tab.Screen
          name="Messages" 
          component={Messages}
          options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({ color, size }) => (
              <Feather name="message-circle" size={24} color={color} />
                  ),
            }} />
        <Tab.Screen 
          name="Profile" 
          component={SignUp} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" size={24} color={color} />
                  ),
            }}
          />
      </Tab.Navigator>
    );
  }
  return (

    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={Hom} />
          <Stack.Screen name="Appointment" component={Appointment} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Log" component={Log} />
          <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
      </Stack.Navigator> 
    </NavigationContainer> 
    </Provider>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
