import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HospitalCard({name, department, address,onPress}) {
    // set name
    // set department list
    // calculate distance to user 
  return (
    <TouchableOpacity style={{
        backgroundColor: 'white',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'lightgray',
        width: '90%',
        height:220,
        marginBottom:20
    }} onPress={onPress}>
      <Image
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NRMoIhQrSMwUPIiguW_hWG7RC15ha2j0jA&usqp=CAU'}}
        resizeMode='cover'
        style={{
            width: '100%',
            height: 150,
            borderRadius:10
        }}
      />
      {/* Content view */}
      <View style={{
          flexDirection:'column',
          justifyContent:'space-around',
          alignContent:'flex-start',
          padding:10,
          height:70,
      }}>
        <Text style={{ fontSize:15, fontWeight:'600', letterSpacing:0.5, color:'black' }}>{name?name:'Hospital General'}</Text>
        <View style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Text style={{ fontSize:13, fontWeight:'600', letterSpacing:0.1, color:'gray' }}>{department?department:'Cardiology'}</Text>
            <Text>{address?address:'1.2'} Km</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}