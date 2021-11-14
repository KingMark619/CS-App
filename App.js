import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const handleSignup = () => {
  const email = 'hello@234.com'
  const password = 'jeez5545'
  // .createUserWithEmailAndPassword(email, password)
  // .then((userCredentials) => {
  //   const user = userCredentials.user
  //   console.log(user.email)
  // })
  // .catch((error) => {alert(error.message)})
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button  title='log' onPress={handleSignup}/>
    </View>
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
