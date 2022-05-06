import { View, Text, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Constant from '../../Constant'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const screenWidth = Dimensions.get('window').width

export default function Screen3({navigation}) {

  const [bloodType,setBloodType] = useState('')
  const [relationship,setRelationship] = useState('')
  const [phone, setPhone] = useState('')

return (
  <ScrollView style={{
      paddingRight:10,
      paddingLeft:10,
      paddingTop:60
  }}>
      <Text style={{
              ...Constant.h1,
              marginBottom:20
              }}>Medical Information</Text>
    <View style={{
        paddingTop:20,
        justifyContent: 'center',
        alignItems: 'center'
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
          placeholder="Blood type"
          onChangeText={setBloodType}
          value={bloodType}
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
          placeholder="Existing conditions"
          onChangeText={setRelationship}
          value={relationship}
      />
      <TouchableOpacity onPress={()=> navigation.replace('Home')} style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf:'baseline',
          backgroundColor:'lightblue',
          ...Constant.radius2,
          height:50,
          width:90,
      }}>
          <Text style={{...Constant.h3}}>Done</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
)
}