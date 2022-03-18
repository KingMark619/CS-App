import React, { useState, useEffect } from 'react'
import { 
    View,
    ScrollView, 
    Text, 
    Image, 
    TextInput, 
    Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default function Form({navigation}) {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const [photo,setPhoto] = useState('')

  return (
    <View>
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
                    placeholder="Enter your Name"
                    onChangeText={setName}
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
                    }}
                    keyboardType='phone-pad'
                    placeholder="Enter your phone number"
                    onChangeText={setNumber}
                    value={password}
                />
      {/* upload photo */}
      {/*  */}
    </View>
  )
}