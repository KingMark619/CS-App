
import React , { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    Image,
    ScrollView,
    StyleSheet,
    Button,
    Platform,
    Dimensions, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DoctorList } from '../dummyData'
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';

async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  }
  
  async function createCalendar() {
    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: 'Expo Calendar' };
    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    console.log(`Your new calendar ID is: ${newCalendarID}`);
  }

export default function DoctorProfile({navigation}) {
   
    useEffect(() => {
        (async () => {
          const { status } = await Calendar.requestCalendarPermissionsAsync();
          if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
            console.log('Here are all your calendars:');
            console.log({ calendars });
          }
        })();
      }, []);

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
            marginBottom: 30
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
            <Text style={{fontSize:18, fontWeight:'300', color:'black', marginBottom:10}}>{DoctorList[0].specialty}</Text>
            <Text style={{fontSize:28, fontWeight:'600', color:'black'}}>Dr. {DoctorList[0].name}</Text>
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
            <View style={{
                width:55,
                height:55,
                padding:15,
                borderRadius:20,
                backgroundColor:'#FFF7EB',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <FontAwesome name="phone" size={24} color="#FFD667" />
            </View>
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
            <Text style={{fontSize:25, fontWeight:'600',color:'black',marginBottom:20}}>About</Text>
            <Text style={{fontSize:15, fontWeight:'300', color:'gray', lineHeight:20}}>Dr Alan C. Baverman is a cardiologist in Saiont Louis, Missouri and is affiliated with multiple hospitals in the area.</Text>
        </View>
        {/* Calendar */}
        <View style={{marginBottom:20}}>
            <Text style={{fontSize:25, fontWeight:'600',color:'black'}}>Schedule</Text>
            {/* insert calendar */}
            <Text>Calendar Module Example</Text>
            <Button title="Create a new calendar" onPress={createCalendar} />
        </View>
        {/* Appointment */}
        <View>
            <TouchableOpacity style={{
                        borderRadius:8,
                        backgroundColor: '#4368F6',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height:50
                    }}
                    >
                        <Text style={{color:'white',fontSize:18, fontWeight:'bold'}}>Appointment</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}