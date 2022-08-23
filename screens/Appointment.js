import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    Image,
    ScrollView,
    Dimensions, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DoctorList } from '../dummyData'
import { Feather, FontAwesome } from '@expo/vector-icons';
import Constant from '../Constant';


const screenWidth = Dimensions.get('window').width


const AppointmentListCard = ({date, time, name, number,department}) => {
    return (
        <View style={{
            width:'90%',
            height:100,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center',
        }}>
            {/* date */}
            <View style={{
                width:70,
                height:70,
                ...Constant.radius2,
                ...Constant.border,
                ...Constant.padding,
                backgroundColor: '#FFD667',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{...Constant.h1}}>27</Text>
                <Text style={{...Constant.h6}}>October</Text>
            </View>
            {/* name and time */}
            <View style={{
                justifyContent: 'space-between',
                alignItems: 'start',
                flexDirection: 'column',
                
            }}>
                <Text style={{...Constant.h3}}>Medicine Doctor</Text>
                <Text style={{...Constant.h4, color:'gray'}}>11:20 AM</Text>
            </View>
            {/* number */}
            
            <TouchableOpacity style={{
                width:45,
                height:45,
                padding:8,
                borderRadius:12,
                backgroundColor:'#f7f7f7',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <FontAwesome name="phone" size={24} color="#FFD667" />
            </TouchableOpacity>
            
        </View>
    )
}
const Calendar = () => {
    // get todays date on useEffect,
    const date = new Date();
    console.log(date.getMonth()+1)
    return(
        <View style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
        }}>
            <Text style={{...Constant.h2}}>Upcoming</Text>
            {/* <Text style={{...Constant.h4,}}>-- No appointments --</Text> */}
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft:10
            }}>
                <AppointmentListCard/>
                <AppointmentListCard/>
            </View>
        </View>
    )
}

export default function Appointment({navigation}) {

    const [appointments, setAppointments] = useState()
    const [doctors, setDoctors] = useState()

    useEffect(() => {
        // load appointment and doctors nearby
        Calendar()
    },[])

    const DoctorCard = ({name, specialty, profile, emoji,id}) => {
        return(
            <TouchableOpacity key={id} style={{
                backgroundColor:'white',
                height:120,
                width:screenWidth*0.9,
                ...Constant.border,
                ...Constant.radius2,
                paddingRight:20,
                justifyContent: 'space-between',
                flexDirection: 'column',
                ...Constant.margin
                }}
                onPress={() => navigation.navigate('DoctorProfile')}
                >
                    {/* text */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop:10,
                    }}>
                    <View style={{ 
                        marginLeft:25, 
                        flexDirection:'row',
                        justifyContent: 'space-between',
                        }}>
                        <View>
                            <Text style={{...Constant.h3}}>Dr {name}</Text>
                            <Text style={{...Constant.h4, color:'gray'}}>{emoji} {specialty}</Text>
                        </View>
                    </View>  
                    {/* picture */}
                    <View>
                    <Image 
                        source={{uri:profile}}
                        resizeMode='cover'
                        style={{
                            width:55,
                            height:55,
                            borderRadius:28
                        }}
                    />
                    </View> 
                    </View>
                    {/* second row */}
                    <View style={{
                        flexDirection:'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom:10,
                        paddingLeft:10,
                    }}>
                        <Text style={{...Constant.h4, color:'#FFD667'}}>Get in touch</Text>
                        <TouchableOpacity style={{
                            backgroundColor:'#f7f7f7',
                            padding:8,
                            ...Constant.radius2
                        }}>
                            <Text style={{...Constant.h4, alignSelf:'center'}}>Appointment</Text>
                        </TouchableOpacity>
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
            paddingTop:60,
            }}>
                {/* header */}
                <View style={{marginBottom:20}}>
                <Text style={{
                ...Constant.h1,
                marginBottom:20
                }}>Let's find your Doctor</Text>
                <View style={{
                    alignSelf:'center',
                    width:screenWidth*0.8,
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom:20

                }}>
                    <Image
                        source={require('../assets/stethoscope.png')}
                        resizeMode='cover'
                        style={{
                            width:40,
                            height:40,
                        }}
                    />
                    <Image
                        source={require('../assets/heart.png')}
                        resizeMode='cover'
                        style={{
                            width:40,
                            height:40,
                        }}
                    />
                    <Image
                        source={require('../assets/tooth.png')}
                        resizeMode='cover'
                        style={{
                            width:40,
                            height:40,
                        }}
                    />
                    <Image
                        source={require('../assets/syringe.png')}
                        resizeMode='cover'
                        style={{
                            width:40,
                            height:40,
                        }}
                    />
                </View>
                </View>
            

            {/* search doctors in your area */}
            <View style={{
                justifyContent: 'center',
                 alignItems: 'center',
                 marginBottom:20}}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} 
                    style={{
                     height:50,
                     width:screenWidth * 0.8,
                     ...Constant.radius2,
                     backgroundColor:'#f7f7f7',
                     padding:10,
                     flexDirection: 'row',
                     justifyContent: 'space-between'
                }}>
                    <Text style={{ color:'gray', alignSelf: 'center'}}>Search for doctors</Text>
                    <Feather name="search" size={24} color="#302f2c" />
                </TouchableOpacity>
            </View>
            <View>
                <Calendar/>
            </View>
            {/* Nearby doctors / hospitals */}
            <Text style={{
                ...Constant.h2,
                ...Constant.margin
                }}>Available <Text style={{fontSize:6,}}>🟢</Text></Text>
            
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                {/* doctor card */}
                    {DoctorList.map((doctor, index) =>DoctorCard(doctor,index))}
            </View>
            {/* margin due to bottom tab bar */}
            <View style={{marginBottom:60}}></View>
        </ScrollView>
    )
}
