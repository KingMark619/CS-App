import { StatusBar } from 'expo-status-bar';
import React,{useCallback} from 'react';
import { StyleSheet,} from 'react-native';
import store from './store/Store';
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './components/Tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test from './components/Onboarding';

import {
  Home,
  Appointment, 
  Login, 
  SignUp,
  Messages,
  Onboarding,
  Log,
  Infos,
  Search,
  DoctorProfile,
  Schedule,
  Chat,
  Screen1,
  Screen2,
  Screen3
} from './screens/Index'

import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function Hom() {
    return (
      <>
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
      </>
    )
  }
  return (

    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Onboarding" component={Test}/>
          <Stack.Screen name="Home" component={Hom} />
          <Stack.Screen name="Appointment" component={Appointment} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Log" component={Log} />
          <Stack.Screen name="Infos" component={Infos} />
          <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
          <Stack.Screen name="Schedule" component={Schedule}/>
          <Stack.Screen name="Screen1" component={Screen1}/>
          <Stack.Screen name="Screen2" component={Screen2}/>
          <Stack.Screen name="Screen3" component={Screen3}/>
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
