import React from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import Constant from '../Constant'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { image3 } from '../dummyData'

const {width} = Dimensions.get('window')

export default function NearbyCard() {
  return (
    <View style={{
        width:width*0.9,
        height: width*0.18,
        borderRadius:18,
        marginEnd:12,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'#f5f5f5'
    }}>
        <View style={{
            flexDirection: 'row',
            justifyContent:'space-evenly',
            alignItems: 'center',
            paddingLeft:12,
        }}>
        <View style={{
            width:60,
            height:60,
            borderRadius:12,
            
            backgroundColor:'white',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Image
            source={image3}
            resizeMode='cover'
            style={{
                width: 30,
                height:30,
            }}
        />
        </View>
        <View style={{
            flexDirection:'column',
            paddingLeft:10
        }}>
            <Text style={Constant.h3}>Dr. Karl Batchelor</Text>
            <Text style={{...Constant.h4, color:'#5b5b5b', fontWeight:'300'}}>Endocrinologist</Text>
        </View>
        </View>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-evenly',
            alignItems: 'center',
            width:'25%',
            height:'35%',
            borderColor:'lightgray',
            borderRadius:40,
            backgroundColor:'#afe7f2',
            marginEnd:12
            
        }}>
            <MaterialCommunityIcons name="radar" size={24} color="black" />
            <Text style={{...Constant.h4, color:'black', fontWeight:'400'}}>500 m</Text>
        </View>
    </View>
  )
}
