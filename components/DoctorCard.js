import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Image, Text } from 'react-native'
import Constant from '../Constant'
import { image3 } from '../dummyData'

export default function DoctorCard({profile, name, specialty}) {
  return (
    <TouchableOpacity>
        <View style={{
            borderRadius:12,
            borderWidth:5,
            borderColor:'#fff'
        }}>
            <Image
                source={image3}
                style={{
                    width:100,
                    height:100,
                    borderRadius:12
                }}
            />
        </View>
        <View style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Text style={Constant.h4}>{name?name:'Doctor Steve'}</Text>
            <Text style={Constant.h4}>{specialty?specialty:'Cardiologist'}</Text>

        </View>
    </TouchableOpacity>
  )
}
