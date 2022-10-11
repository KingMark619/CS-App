import React from 'react'
import { View, Text } from 'react-native'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from './Login';
import SignUp from './SignUp';

//  Cgeck user status. if first time, show the screens, else show the login. 
// if user is logged in show profile, name and personal info. 

export default function Onboarding() {
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('in')
    return(
        <Login/>
    )
    // ...
  } else {
    // User is signed out
    console.log("out")
    // ... 
    return(
        <SignUp/>
    )
  }
});
return(
    <View>
        <SignUp/>
    </View>
)
}
