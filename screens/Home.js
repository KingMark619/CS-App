import React, { useState, useEffect } from 'react'
import Constant from '../Constant'
import { 
    View, 
    Text, 
    Image, 
    Dimensions, 
    TextInput, 
    FlatList } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {getAuth} from 'firebase/auth'
import HospitalCard from '../components/HospitalCard';
import { Article } from '../dummyData';

const screenWidth = Dimensions.get('window').width

export default function Home({navigation}) {
    const auth = getAuth();
    

    const [username, setUsername] = useState('Mark') // pull data from user
    const [photoURL, setPhotoURL] = useState('') 
    const [searchInput, setSearchInput] = useState('') // set search bar info
     useEffect(() =>{
        if (auth != null) {
            const user = auth?.currentUser
            console.log(`user is: ${user}`)
            // setUsername(user.providerData[0].email)
            // setPhotoURL(user.providerData[0].photoURL)
        }
     },[])

     const renderItem = ({ item }) => (
        <View style={{
            width:screenWidth*0.95,
            height: screenWidth*0.3,
            justifyContent: 'space-around',
            overflow:'hidden',
            ...Constant.padding,
            ...Constant.radius2,
            ...Constant.border,
            ...Constant.margin,
            
        }}>
            <Text style={Constant.h4}>{item.title}</Text>
            <Text style={Constant.h4}>{item.subtitle}</Text>
        </View>
      );
     // Main view bellow
    return (
        <ScrollView style={{ backgroundColor:'white' }}>
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
                    flexDirection:'column',
                    paddingLeft:15
                    }}>
                    <View style={{
                    justifyContent: 'center', 
                    flexDirection:'row',
                    
                    }}>
                        <Text style={Constant.h1}>Hello </Text>
                        <Text style={Constant.h1}>{username},</Text>
                    </View>
                    <View>
                        <Text style={{...Constant.h4, color:'gray'}}>How are you today?</Text>
                    </View>
                </View>
                <View>
                    <Image
                        source={require('../assets/memoji.jpeg')}
                        resizeMode='cover'
                        style={{
                            width:60,
                            height:60,
                            borderRadius: 50 }}
                    />
                </View>
            </View>
            {/* Search bar for symptoms */}
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom:20 }}>
                <TextInput
                    style={{
                        ...Constant.border,
                        ...Constant.radius2,
                        ...Constant.padding,
                        width:screenWidth * 0.9,
                        height:50,
                    }}
                    onChangeText={ setSearchInput }
                    value={ searchInput }
                    placeholder="Search health issues ..."
                />
            </View>

            <View style={{
                ...Constant.padding,
                ...Constant.margin
            }}>
                <Text style={Constant.h2}>Consult for today </Text>
            </View>
            {/* Book appointment with doctor*/}
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                ...Constant.margin}}>
                <View style={{
                    width:screenWidth*0.92,
                    height: screenWidth*0.4,
                    justifyContent: 'space-around',
                    ...Constant.border,
                    ...Constant.radius2,
                    ...Constant.padding,
                }}>
                    <Text style={Constant.h4}>Want to see a doctor? Schedule an appointment</Text>
                    <Text style={Constant.h4}>At home or at the hospital, it's dead easy</Text>
                    <TouchableOpacity style={{
                        ...Constant.radius2,
                        ...Constant.border,
                        backgroundColor: '#4368F6',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf:"center",
                        height:40,
                        width:screenWidth * 0.5,
                           
                    }}
                    // navigate to available doctors list 
                    onPress={() => navigation.navigate('DoctorProfile')}
                    >
                        <Text style={{...Constant.h4, color:'white',}}>Book appointment</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Learn more / info blog */}
            <View style={{
                ...Constant.padding,
                ...Constant.margin}}>
                <Text style={{
                    ...Constant.h2, 
                    }}>Learn more  </Text>
            </View>
            {/* display articles */}
            <View style={{
                justifyContent: 'center',
                alignItems: 'center', 
                paddingStart:5,
                paddingEnd:5,
                ...Constant.margin,
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
            </View>
             {/* Nearby hospitals */}
             <View style={{
                ...Constant.padding,
                ...Constant.margin}}>
                <Text style={{
                    ...Constant.h2, 
                    }}>Hospitals near you</Text>
            </View>
             <View style={{
                 justifyContent: 'center',
                 alignItems: 'center', 
                 ...Constant.margin}}>

                <HospitalCard name='Hopital General de Mwangaji' department='Pediatry, Maternity' address='2.2'/>
                <HospitalCard name='Hopital Gecamines' department='Surgery, Cardiolody' address='4.2' onPress={()=>navigation.navigate('Chat')}/>
            </View>
            {/* bottom tab menu/ end of page */}
        </ScrollView>
    )
}
