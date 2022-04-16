
import React , { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    Image,
    ScrollView, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DoctorList } from '../dummyData'
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking'
import Constant from '../Constant'

export default function DoctorProfile({navigation}) {
   const call = () =>{
     Linking.openURL('tel:15527971013')
   }
  return (
    <ScrollView style={{
        backgroundColor:'white',
        paddingTop:50,
        paddingLeft:15,
        paddingRight:15,
        }}>
            {/* back arrow */}
            <View style={{
                position:'fixed',
                top:0,
                left:0,
                zIndex:1000
            }}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
        {/* profile pic, name, speciality */}
        <View style={{
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            ...Constant.margin
        }}>
            <Image 
                source={require('../assets/doctor.png')}
                resizeMode='cover'
                style={{
                    width:140,
                    height:140,
                    borderRadius:15,
                    marginBottom:40,
                }}
            />
            <Text style={{...Constant.h3, color:'gray'}}>{DoctorList[0].specialty}</Text>
            <Text style={{...Constant.h1,}}>Dr. {DoctorList[0].name}</Text>
        </View>
        {/* actions : messages, call, location */}
        <View style={{
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems: 'center',
            width: '90%',
            alignSelf:'center',
            marginBottom: 30
            }}>
            <TouchableOpacity onPress={()=>navigation.navigate('Chat')} style={{
                width:55,
                height:55,
                padding:15,
                borderRadius:20,
                backgroundColor:'#E7EFFD',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Entypo name="message" size={24} color="#6EA9FE" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>call()} style={{
                width:55,
                height:55,
                padding:15,
                borderRadius:20,
                backgroundColor:'#FFF7EB',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <FontAwesome name="phone" size={24} color="#FFD667" />
            </TouchableOpacity>
            <View style={{
                width:55,
                height:55,
                padding:15,
                borderRadius:20,
                backgroundColor:'#F4F5F9',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <FontAwesome name="video-camera" size={24} color="#D5D6D9" />
            </View>
            <View style={{
                width:55,
                height:55,
                padding:15,
                borderRadius:20,
                backgroundColor:'#F1F1FF',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Ionicons name="location" size={24} color="#ED86AA" />
            </View>
        </View>
        {/* About  */}
        <View style={{marginBottom:20}}>
            <Text style={{...Constant.h2}}>About</Text>
            <Text style={{...Constant.h4, color:'gray', lineHeight:20}}>Dr Alan C. Baverman is a cardiologist in Saiont Louis, Missouri and is affiliated with multiple hospitals in the area.</Text>
        </View>
        {/* Calendar */}
        <View style={{marginBottom:20}}>
            <Text style={{...Constant.h2}}>Schedule</Text>
        </View>
        {/* Appointment */}
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Schedule')} style={{
                        borderRadius:8,
                        backgroundColor: '#4368F6',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf:'center',
                        height:40, 
                        width:200,
                    }}
                    >
                    <Text style={{...Constant.h4, color:'white'}}>Appointment</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}