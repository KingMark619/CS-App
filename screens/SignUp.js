import React, { useState } from 'react'
import { 
    View,
    ScrollView, 
    Text, 
    Image, 
    TextInput, 
    Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


import { Feather,AntDesign } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default function SignUp({navigation}) {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const checkTextField = () => {
        console.log('check text field')
        const auth = getAuth();
        if (email != '' && password != '') {
            if (confirmPassword === password) {
                navigation.navigate('Infos', {email: email, password: password})
          }
          else {
              alert('Password do not match !')
          }
        }
        // invalid email or password
        else if (email === '' || password === '') {
            alert('Invalid email or password')
        }
    }     

  return (
        <ScrollView style={{ 
            backgroundColor:'white', 
            height: screenHeight,
            paddingTop:80
            }}>
                {/* setting button */}
            <View style={{
                position:'fixed',
                top:0,
                left:350,
                zIndex:1000
            }}>
                <TouchableOpacity>
                    <Feather name="settings" size={24} color="#8b8b8b" />
                </TouchableOpacity>
            </View>
            {/* create form to sign up */}
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'white',
                }}>
            <View style={{
                flexDirection:'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:50
                }}>
            <Image
                source={require('../assets/drc.png')}
                resizeMode='center'
                style={{
                    width: 70,
                    height:70,
                    borderRadius: 10,
                }}
            />

            </View>
            {/* email, password, phone number ?, */}
            <View style={{
                marginTop:50,
            }}>
               
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
                    placeholder="Email address"
                    onChangeText={setEmail}
                    value={email}
                />
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
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                />
                <TextInput
                    style={{
                        borderRadius: 12,
                        width:screenWidth * 0.9,
                        borderColor:'lightgray',
                        borderBottomWidth:1,
                        height:50,
                        padding:10,
                    }}
                    placeholder="Confirm Password"
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                />
           
            </View>
            <TouchableOpacity onPress={checkTextField}>
                <View style={{
                    backgroundColor:'#4368F6',
                    width:screenWidth * 0.5,
                    height:40, 
                    borderRadius:12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:50
                    }}>
                    <Text style={{
                        fontSize:15,
                        fontWeight: '500',
                        color:"white"
                        }}>Sign Up</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Log')}>
                <View style={{
                    backgroundColor:'#fff',
                    width:screenWidth * 0.5,
                    height:40, 
                    borderRadius:12,
                    borderColor:'lightgray',
                    borderWidth:0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:30,
                    }}>
                    <Text style={{
                        fontSize:15,
                        fontWeight: '500',
                        color:"black"
                        }}>Sign up with mobile</Text>
                </View>
            </TouchableOpacity>
           
            {/* already have an account */}
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}
                
                style={{
                    marginTop:30,
                    left: 90,
                    position: 'relative',
                }} >
                <Text style={{
                        fontSize:15,
                        fontWeight: '300',
                        color:"gray",
                        textDecorationStyle:'solid',
                        textDecorationLine:'underline'
                        }}>Already have an account?</Text>
            </TouchableOpacity>
            {/* Sign up with social media */}
            {/* <View style={{
                flexDirection:'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop:70,
                width:screenWidth * 0.8
            }}>
                <TouchableOpacity style={{
                    borderColor:'lightgray', 
                    borderWidth:1,
                    borderRadius: 50,
                    padding:7,
                    backgroundColor:'blue',}}>
                    <Feather name="facebook" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="twitter" size={40} color="lightblue" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="instagram" size={40} color="red" />
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:-5}}>
                    <AntDesign name="apple1" size={40} color="black" />
                </TouchableOpacity>
            </View> */}
            </View>
        </ScrollView>
    )
}
