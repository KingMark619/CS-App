import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    Image,
    ScrollView,
    TextInput, 
    Dimensions, } from 'react-native'
import Constant from '../Constant';
import { TouchableOpacity } from 'react-native-gesture-handler'

import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
const screenWidth = Dimensions.get('window').width

export default function Infos(navigation) {

    const [displayName,setDisplayName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [sex, setSex] = useState('M')
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() =>{
        setEmail(navigation.route.params.email)
        setPassword(navigation.route.params.password)
    },[])

    const SignUp = () => {
        const auth = getAuth();
                createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                  // Signed in 
                  updateProfile(auth.currentUser, {
                    displayName: displayName,
                    phoneNumber: phoneNumber,
                    photoURL: "https://placeimg.com/140/140/any"
                  }).then(() => {
                    // Profile updated!
                    // have success animation 
                    go()
                  }).catch((error) => {
                    // An error occurred
                    console.log(error)
                  });
                })
                .catch((error) => {
                  const errorMessage = error.message;
                  console.log(errorMessage)
                });

 // check email and password
        // let validEmail = false
        // let validPassword = false
        // // regex to check password and email 
        // const mailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        // const passwordFormat = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/

        // if(!email.match(mailFormat)){
		//     alert("This is not a valid email address");
		//     return validEmail = true;
		// }
        // if(!password.match(passwordFormat)){
        //     alert("Invalid, make sure password has 8-20 characters, a number and a special characters");
		//     return  validPassword = true;
        // }
        // // success, check with firebase and connect user 


    }  
    
    const go = ()=> {
        console.log("nav lunch")
        navigation.navigate('Home')
    }
  return (
    <View style={{
        paddingLeft:10, 
        paddingRight:10, 
        backgroundColor:'white',
        paddingTop:60,
        height:'100%'
        }}>
        <Text style={{
                ...Constant.h1,
                marginBottom:20
                }}>Tell us more</Text>
      <View style={{
          justifyContent: 'center',
          alignItems: 'flex-start'
      }}>
        <Text>What do we call you</Text>
        <TextInput
            style={{
                borderRadius: 12,
                width:screenWidth * 0.9,
                borderColor:'lightgray',
                borderBottomWidth:1,
                height:50,
                padding:10,
                marginBottom:15
                }}
                placeholder="Name"
                onChangeText={setDisplayName}
                value={displayName}
        />
        {/* image group */}
        <View style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            width:screenWidth * 0.8
        }}>
            <Image
                source={require('../assets/memoji.jpeg')}
                resizeMode='cover'
                style={{
                    width:60,
                    height:60,
                    borderRadius: 50 }}
            />
            <Image
                source={require('../assets/memoji.jpeg')}
                resizeMode='cover'
                style={{
                    width:60,
                    height:60,
                    borderRadius: 50 }}
            />
        </View>
        <TextInput
            style={{
                borderRadius: 12,
                width:screenWidth * 0.9,
                borderColor:'lightgray',
                borderBottomWidth:1,
                height:50,
                padding:10,
                marginBottom:15
                }}
                keyboardType="phone-pad"
                placeholder="Phone"
                onChangeText={setPhoneNumber}
                value={phoneNumber}
        />
        
      </View>
      {/* bottom bar */}
      <View style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          position: 'absolute',
          bottom: 40,
          right:15
      }}>
            <TouchableOpacity onPress={SignUp} style={{
                position: 'relative',
                bottom:0
            }}>
                <View style={{
                    backgroundColor:'#4368F6',
                    width:screenWidth * 0.35,
                    height:40, 
                    borderRadius:12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <Text style={{
                        fontSize:15,
                        fontWeight: '500',
                        color:"white"
                        }}>Done</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}