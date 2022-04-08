import React, { useState, useEffect } from 'react'
import { View, Text, Image, Dimensions, TextInput, FlatList } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getAuth} from 'firebase/auth'
import HospitalCard from '../components/HospitalCard';
import { Article } from '../dummyData';

const screenWidth = Dimensions.get('window').width

export default function Home({navigation}) {
    const auth = getAuth();
    const user = auth?.currentUser

    const [username, setUsername] = useState('Mark') // pull data from user
    const [photoURL, setPhotoURL] = useState('') 
    const [searchInput, setSearchInput] = useState('') // set search bar info
     useEffect(() =>{
        if (auth != null) {
            // setUsername(user.providerData[0].email)
            // setPhotoURL(user.providerData[0].photoURL)
        }
     },[])

     const renderItem = ({ item }) => (
        <View style={{
            width:screenWidth*0.95,
            height: screenWidth*0.3,
            borderRadius:8,
            borderWidth:1,
            borderColor: 'lightgray',
            padding:10,
            justifyContent: 'space-around',
            overflow:'hidden',
            marginBottom:20,
        }}>
            <Text style={{fontSize:15, fontWeight:'400'}}>{item.title}</Text>
            <Text style={{fontSize:15, fontWeight:'400'}}>{item.subtitle}</Text>
        </View>
      );
     // Main view bellow
    return (
        <ScrollView style={{backgroundColor:'white'}}>
            {/* username block */}
            <View style={{ 
                justifyContent:'space-between', 
                alignItems: 'center',
                width: screenWidth,
                flexDirection:'row',
                paddingRight:10,
                marginBottom:20,
                marginTop:50
                }}>
                <View style={{
                    justifyContent: 'center', 
                    flexDirection:'row',
                    paddingLeft:10
                    }}>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>Hello </Text>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>{username}</Text>
                </View>
                <View>
                    <Image
                        source={require('../assets/memoji.jpeg')}
                        resizeMode='cover'
                        style={{width:60, height:60, borderRadius: 50}}
                    />
                </View>
            </View>
            {/* Search bar for symptoms */}
            <View style={{justifyContent: 'center',alignItems: 'center', marginBottom:20}}>
                <TextInput
                    style={{
                        width:screenWidth * 0.9,
                        borderRadius:8,
                        borderWidth:1,
                        borderColor:'lightgray',
                        height:40,
                        padding:5,
                    }}
                    onChangeText={setSearchInput}
                    value={searchInput}
                    placeholder="Search symptoms"
                />
            </View>

            <View style={{
                padding:10,
                marginBottom:10,
            }}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>Consult for today </Text>
            </View>
            {/* Book appointment with doctor*/}
            <View style={{justifyContent: 'center', alignItems: 'center', marginBottom:20}}>
                <View style={{
                    width:screenWidth*0.92,
                    height: screenWidth*0.5,
                    borderRadius:8,
                    borderWidth:1,
                    borderColor: 'lightgray',
                    padding:10,
                    justifyContent: 'space-around',
                }}>
                    <Text style={{fontSize:15, fontWeight:'400'}}>Want to see a doctor?</Text>
                    <Text style={{fontSize:15, fontWeight:'400'}}>Schedule an appointment.</Text>
                    <Text style={{fontSize:15, fontWeight:'400'}}>at home or at the hospital</Text>
                    <TouchableOpacity style={{
                        borderRadius:8,
                        backgroundColor: '#4368F6',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height:40,
                        width:screenWidth * 0.6,
                        alignSelf:"center",   
                    }}
                    onPress={() => navigation.navigate('DoctorProfile')}
                    >
                        <Text style={{color:'white',fontSize:18, fontWeight:'500'}}>Book appointment</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{
                        borderRadius:8,
                        backgroundColor: '#4368F6',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height:50
                    }}
                    onPress={() => navigation.navigate('Log')}
                    >
                        <Text style={{color:'white',fontSize:18, fontWeight:'bold'}}>phone check</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
            {/* Learn more / info blog */}
            <View style={{
                justifyContent: 'center',
                alignItems: 'center', 
                marginBottom:20,
                paddingStart:5,
                paddingEnd:5
                }}>
                <FlatList
                    data={Article}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    snapToAlignment="center"
                    decelerationRate="fast"
                    snapToInterval={screenWidth}
                />
            <TouchableOpacity>
                
            <Text style={{
                fontSize:18, 
                fontWeight:'bold', 
                alignSelf:'flex-start', 
                paddingLeft:10,
                marginBottom:10,
                }}>Learn more  </Text>
                {/* display articles */}
                {/* {Article.map( (item) => 
                    <View style={{
                        width:screenWidth*0.92,
                        height: screenWidth*0.3,
                        borderRadius:8,
                        borderWidth:1,
                        borderColor: 'lightgray',
                        padding:10,
                        justifyContent: 'space-around',
                        overflow:'hidden',
                        marginBottom:20
                    }}>
                        <Text style={{fontSize:15, fontWeight:'400'}}>{item.title}</Text>
                        <Text style={{fontSize:15, fontWeight:'400'}}>{item.subtitle}</Text>
                    </View>
                )} */}
                </TouchableOpacity>
            </View>
             {/* Nearby hospitals */}
             <View style={{justifyContent: 'center', alignItems: 'center', marginBottom:20}}>
                <Text style={{
                    fontSize:18, 
                    fontWeight:'bold', 
                    alignSelf:'flex-start', 
                    paddingLeft:10,
                    marginBottom:10,
                    }}>Hospitals near you  </Text>

                <HospitalCard name='Hopital General de Mwangaji' department='Pediatry, Maternity' address='2.2'/>
                <HospitalCard name='Hopital Gecamines' department='Surgery, Cardiolody' address='4.2' onPress={()=>navigation.navigate('Chat')}/>
            </View>
            {/* bottom tab menu/ end of page */}
        </ScrollView>
    )
}
