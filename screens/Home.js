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
import Photo from '../assets/memoji.jpeg'
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

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
            console.log(user?.providerData)
            setUsername(user?.providerData[0].displayName)
            setPhotoURL(user?.providerData[0].photoURL)
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

      const Icons = ({item}) => (
          
        <TouchableOpacity 
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginEnd:20
            }}
        >
      
        <View style={{
                padding:10,
                borderRadius:30,
                marginBottom:10,
                backgroundColor:'lightgray',
                width:60,
                height:60,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <FontAwesome5 name={item} size={30} color="#4368F6" />
        </View>
        <View>
            <Text style={{
                color:'gray',
                fontWeight:'500'
            }}>{item}</Text>
        </View>
        
    </TouchableOpacity>
      )

    const AppointmentCard = () => {

        return(
            <TouchableOpacity style={{
                 backgroundColor:'#4368F6',
                 width:screenWidth*0.92,
                 borderRadius:'12px',
                 padding:12
                 }}>
                {/* first row */}
                <View style={{
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems: 'center',
                    marginBottom:20
                }}>
                    <Image
                        source={{uri: 'https://placeimg.com/140/140/any'}}
                        resizeMode='cover'
                        style={{
                            width:60,
                            height:60,
                            borderRadius:30,
                            marginEnd:20
                        }}
                    />
                    <View style={{
                        flexDirection:'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                    }}>
                        <Text style={Constant.h3}>Dr muhammed</Text>
                        <Text style={{...Constant.h4, ...Constant.gray}}>Dental specialist</Text>
                    </View>
                </View>
                {/* second row */}
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-around',
                    alignItems: 'center',
                    padding: 10,
                    paddingTop:20,
                    paddingBottom:20,
                    borderRadius:8,
                    backgroundColor:'#99c9f0',
                    marginBottom:5
                }}>
                    <AntDesign name="calendar" size={20} color="white" />
                    <Text style={{...Constant.h4, 
                        ...Constant.white}}>Monday, July 29</Text>
                    <AntDesign name="clockcircleo" size={20} color="white" />
                    <Text style={{...Constant.h4, 
                        ...Constant.white}}>11:00 - 12:00 AM</Text>
                </View>
            </TouchableOpacity>
        )
    }

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
                marginBottom:40,
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
                        <Text style={Constant.h1}>{username}{username?',':''}</Text>
                    </View>
                    <View>
                        <Text style={{...Constant.h4, color:'gray'}}>How are you today?</Text>
                    </View>
                </View>
                <View>
                    <Image
                        source={photoURL? {uri: photoURL} :require('../assets/memoji.jpeg')}
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
                marginBottom:40 }}>
                <TextInput
                    style={{
                        ...Constant.border,
                        ...Constant.radius2,
                        ...Constant.padding,
                        width:screenWidth * 0.9,
                        height:50,
                        backgroundColor:'lightgray',
                    }}
                    onChangeText={ setSearchInput }
                    value={ searchInput }
                    placeholderTextColor="gray"
                    placeholder="Search health issues ..."
                />
            </View>

            <View style={{
                flexDirection:'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom:20
            }}>
                <Icons item="virus"/>
                <Icons item="hospital"/>
                <Icons item="ambulance"/>
                <Icons item="pills"/>
            </View>
            
            <View style={{
                ...Constant.padding,
                ...Constant.margin
            }}>
                <Text style={Constant.h2}>Consult for today </Text>
            </View>
            {/* Book appointment with doctor*/}
            <View style={{
                justifyContent:"center",
                alignItems:"center"
            }}>
                <AppointmentCard />
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
                    keyExtractor={item => item.title}
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
