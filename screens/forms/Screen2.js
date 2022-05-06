import { View, Text, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Constant from '../../Constant'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const screenWidth = Dimensions.get('window').width

export default function Screen2({navigation}) {

  const [emergencyContact,setEmergencyContact] = useState('')
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
              }}>Additional Information</Text>
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
          placeholder="Emergency contact"
          onChangeText={setEmergencyContact}
          value={emergencyContact}
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
          placeholder="Relationship to contact"
          onChangeText={setRelationship}
          value={relationship}
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
          placeholder="Phone number"
          keyboardType="numeric"
          onChangeText={setPhone}
          value={phone}
      />
      <TouchableOpacity onPress={()=> navigation.navigate('Screen3')} style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf:'baseline',
          backgroundColor:'lightblue',
          ...Constant.radius2,
          height:50,
          width:90,
      }}>
          <Text style={{...Constant.h3}}>Next</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
)
}