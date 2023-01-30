import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    Image,
    ScrollView,
    Dimensions, } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { DoctorList } from '../dummyData'
import { Feather, FontAwesome } from '@expo/vector-icons';
import Constant from '../Constant';
import AppointmentCard from '../components/AppointmentCard';
import NearbyCard from '../components/NearbyCard';


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

    const DoctorCard = ({item}) => {
        return(
    <TouchableOpacity style={{
        marginLeft:10,
        marginRight:10,
        borderRadius:12,
        borderWidth:3,
        borderColor:'#fff',
        width:120,
        overflow:'hidden'}}>
        <View style={{
            
            
        }}>
            <Image
                source={{uri:item?.profile}}
                resizeMode='cover'
                style={{
                    width:118,
                    height:118,
                    
                }}
            />
        </View>
        <View style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop:10
        }}>
            <Text numberOfLines={1} style={{
                fontWeight:'500',
                fontSize:15,
                letterSpacing:0.5,
                
            }}>{'Dr '}{item.name?item.name:'Doctor Steve'}</Text>
            <Text style={{marginTop:10,fontWeight:'500', fontSize:15,letterSpacing:0.5, color:'gray'}}>{item.specialty?item.specialty:'Cardiologist'}</Text>
        </View>
    </TouchableOpacity>
        )
    }

    // main return bellow 
    return (
        <ScrollView style={{
            backgroundColor:'white',
            }}>
                {/* header */}
                <View style={{
                    paddingLeft:10, 
                    paddingRight:10, 
                    paddingTop:60,
                    paddingBottom:10,
                    marginBottom:20,
                    width:'100%',
                    backgroundColor:'#24478a',
                    // borderBottomLeftRadius:25,
                    // borderBottomRightRadius:25
                }}>
                <Text style={{
                ...Constant.h1,
                marginBottom:20,
                color:'#fff'
                }}>Let's find your Doctor</Text>
                <View style={{
                    alignSelf:'center',
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom:20,
                    width:screenWidth*0.8,

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
                {/* search doctors in your area */}
            <View style={{
                justifyContent: 'center',
                 alignItems: 'center',
                 marginBottom:120 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} 
                    style={{
                     height:50,
                     width:screenWidth * 0.8,
                     ...Constant.radius2,
                     padding:10,
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     backgroundColor:'#f7f7f7',
                }}>
                    <Text style={{ color:'gray', alignSelf: 'center'}}>Search for doctors</Text>
                    <Feather name="search" size={24} color="#302f2c" />
                </TouchableOpacity>
            </View>
                </View>
            
            {/* page start here */}
            
            <View style={{
                justifyContent: 'center', 
                alignItems: 'center',
                marginTop:-80
            }}>
                <FlatList
                    data={DoctorList}
                    renderItem={DoctorCard}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment="start"
                    decelerationRate="fast"
                    snapToInterval={screenWidth}
                />

            </View>
            <View style={{
                ...Constant.padding,
                ...Constant.margin,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={Constant.h2}>Upcoming </Text>
                <Text style={{...Constant.h2, ...Constant.gray}}>{'>'}</Text>
            </View>
            <View style={{paddingStart:10}}>
                {/* <Calendar/> */}
                <AppointmentCard />
            </View>
            {/* Nearby doctors / hospitals */}
            <View style={{
                ...Constant.padding,
                ...Constant.margin,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={Constant.h2}>Nearby Doctors </Text>
                <Text style={{...Constant.h2, ...Constant.gray}}>{'>'}</Text>
            </View>
            <View style={{paddingStart:10}}>
                <NearbyCard/>
            </View>
            {/* doctor card */}
            
        </ScrollView>
    )
}
