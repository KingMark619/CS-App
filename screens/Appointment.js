import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    Image,
    ScrollView,
    Dimensions, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DoctorList } from '../dummyData'
import { Feather } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width

const AppointmentCard = ({ appointment}) => {
    <View style={{
        width:screenWidth*0.9,
        height:80,
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'lightgray',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }}>
        {/* content block */}
            <Image
                source={require('../assets/appointment-icon.png')}
                resizeMode='center'
                style={{width:30, height:30, borderRadius: 50, flex:0.3}}
            />
            {/* text block */}
            <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-start', paddingStart:15}}>
                <Text style={{fontSize:14, fontWeight:'500'}}>26/03/2022</Text>
                <Text style={{fontSize:14, fontWeight:'500'}}>Dr Kay'man Gabriel</Text>
            </View>
        {/* arrow image */}
            <Text style={{fontSize:28, flex:1,fontWeight:'500', color:'gray',textAlign:'right'}}> : </Text>
    </View>
}



export default function Appointment({navigation}) {

    const [appointments, setAppointments] = useState()
    const [doctors, setDoctors] = useState()

    useEffect(() => {
        // load appointment and doctors nearby
    },[])

    const DoctorCard = ({name, specialty, profile, emoji,}) => {
        return(
            <TouchableOpacity style={{
                backgroundColor:'white',
                height:80,
                width:screenWidth*0.9,
                padding:10,
                borderRadius:10,
                alignItems: 'center',
                justifyContent: 'flex-start',
                borderWidth:1,
                borderColor:'lightgray',
                flexDirection: 'row',
                marginBottom:20
                }}
                onPress={() => navigation.navigate('DoctorProfile')}
                >
                    {/* picture */}
                    <View>
                    <Image 
                        source={{uri:profile}}
                        resizeMode='cover'
                        style={{
                            width:55,
                            height:55,
                            borderRadius:10
                        }}
                    />
                    </View>
                    {/* text */}
                    <View style={{ 
                        marginLeft:25, 
                        flexDirection:'row',
                        justifyContent: 'space-between',
                        }}>
                        <View>
                            <Text style={{fontSize:16, fontWeight:'600'}}>Dr {name}</Text>
                            <Text style={{fontSize:14, fontWeight:'500', color:'gray'}}>{emoji} {specialty}</Text>
                        </View>
                        <View style={{marginLeft:230, position:'absolute'}}>
                            <Text style={{fontSize:30, fontWeight:'600'}}>:</Text>
                        </View>
                    </View>   
            </TouchableOpacity>
        )
    }


    // main return bellow 
    return (
        <ScrollView style={{
            paddingLeft:10, 
            paddingRight:10, 
            backgroundColor:'white',
            paddingTop:60}}>
                {/* header */}
                <View style={{marginBottom:20}}>
                <Text style={{
                fontSize:25,
                fontWeight:'700'
                }}>Book an appointment</Text>
                </View>
            {/* appointment type  */}
            <View style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom:20
            }}>
                <View style={{
                    justifyContent: 'space-around', 
                    alignItems: 'center',
                    width: screenWidth*0.45,
                    height: screenWidth*0.7,
                    padding:10,
                    borderWidth:1,
                    borderColor:'lightgray',
                    borderRadius:8,
                }}>
                    <Image
                        source={require('../assets/online-icon.png')}
                        resizeMode='cover'
                        style={{
                            width:60,
                            height:60,
                            borderRadius:50,
                            borderWidth:1,
                            borderColor:'#4368F6',
                        }}
                    />
                    <Text style={{fontSize:15, fontWeight:'500'}}>Book an online session for a video consultation with a doctor of your choice</Text>
                    <TouchableOpacity style={{
                        width:screenWidth*0.35,
                        height:40,
                        padding:10,
                        borderRadius:8,
                        backgroundColor:'#4368F6'
                    }}>
                        <Text style={{fontSize:15, fontWeight:'600',textAlign:'center', color:'white'}}>Book</Text>
                    </TouchableOpacity>
                </View>
                {/* first card above, second card below*/}
                <View style={{
                    justifyContent: 'space-around', 
                    alignItems: 'center',
                    width: screenWidth*0.45,
                    height: screenWidth*0.7,
                    padding:10,
                    borderWidth:1,
                    borderColor:'lightgray',
                    borderRadius:8,
                }}>
                    <Image
                        source={require('../assets/offline-icon.png')}
                        resizeMode='cover'
                        style={{
                            width:60,
                            height:60,
                            borderRadius:50,
                            borderWidth:1,
                            borderColor:'#4368F6',
                        }}
                    />
                    <Text style={{fontSize:15, fontWeight:'500'}}>Book an appointment with a doctor near you, save time forms and waiting room</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Schedule')} style={{
                        width:screenWidth*0.35,
                        height:40,
                        padding:10,
                        borderRadius:8,
                        backgroundColor:'#4368F6'
                    }}>
                        <Text style={{fontSize:15, fontWeight:'600',textAlign:'center', color:'white'}}>Book</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* search doctors in your area */}
            <View style={{
                justifyContent: 'center',
                 alignItems: 'center',
                 marginBottom:20}}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} 
                    style={{
                     height:45,
                     width:screenWidth * 0.8,
                     borderRadius:8,
                     backgroundColor:'#f5f2eb',
                     padding:10,
                     flexDirection: 'row',
                     justifyContent: 'space-between'
                }}>
                    <Text style={{ color:'gray' }}>Search for doctors</Text>
                    <Feather name="search" size={24} color="#302f2c" />
                </TouchableOpacity>
            </View>
            {/* Nearby doctors / hospitals */}
            <Text style={{
                fontSize:18, 
                fontWeight:'bold', 
                alignSelf:'flex-start',
                paddingLeft:10,
                marginBottom:10,
                }}>Doctors near you</Text>
                {/* <TouchableOpacity onPress={()=> navigation.navigate('DoctorProfile')}>
                    <Text style={{marginBottom:20}}>Try me eeeeee</Text>
                </TouchableOpacity> */}
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                {/* doctor card */}
                    {DoctorList.map((doctor, index) =>DoctorCard(doctor,index))}
            </View>
                
            {/* previous appointments */}
          
            <Text style={{
                fontSize:18, 
                fontWeight:'bold', 
                alignSelf:'flex-start',
                paddingLeft:10,
                marginBottom:10,
                }}>Previous appointments</Text>

            <View style={{justifyContent: 'center',alignItems: 'center'}}>
                {/* card */}
                {appointments?.map(item => {
                    <AppointmentCard appointments={item}/>
                })}
            </View>
        </ScrollView>
    )
}
