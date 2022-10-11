import React, { useState, useEffect } from 'react'
import Constant from '../Constant'
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { 
    View, 
    Text, 
    Image, 
    Dimensions, 
    TextInput, 
    FlatList } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { getAuth } from 'firebase/auth'
import HospitalCard from '../components/HospitalCard';
import AppointmentCard from '../components/AppointmentCard';
import { Article } from '../dummyData';
import Photo from '../assets/memoji.jpeg'


const screenWidth = Dimensions.get('window').width

export default function Home({navigation}) {
    const auth = getAuth();

    const [username, setUsername] = useState('Mark') // pull data from user and set default data
    const [photoURL, setPhotoURL] = useState('') 
    const [searchInput, setSearchInput] = useState('') // set search bar info
        // check if user has logged in.
     useEffect(() =>{
        if (auth != null) {
            const user = auth?.currentUser
            // set username and profile image
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
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'lightgray',
                padding:10,
                borderRadius:30,
                marginBottom:10,
                width:60,
                height:60,
            }}>
            <FontAwesome5 name={ item } size={30} color="#4368F6" />
        </View>
        <View>
            <Text style={{
                color:'gray',
                fontWeight:'500'
            }}>{item}</Text>
        </View>
        
        </TouchableOpacity>
      )

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
