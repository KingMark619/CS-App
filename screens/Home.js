import React, { useState, useEffect } from 'react'
import Constant from '../Constant'
import { FontAwesome5, AntDesign, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { 
    View, 
    Text, 
    Image, 
    Dimensions, 
    TextInput, 
    FlatList, 
    ImageBackgroundComponent} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { getAuth } from 'firebase/auth'
import HospitalCard from '../components/HospitalCard';
import AppointmentCard from '../components/AppointmentCard';
import { Specialties, Article, image2 } from '../dummyData';
import Photo from '../assets/memoji.jpeg'
import { color } from 'react-native-reanimated';


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
            height: screenWidth*0.2,
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent:'space-evenly',
                alignItems: 'center',
            }}>
            <Image
                source={image2}
                resizeMode='cover'
                style={{
                    width: 60,
                    height:60,
                    borderRadius:60
                }}
            />
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
                backgroundColor:'#afe7f2'
                
            }}>
                <MaterialCommunityIcons name="radar" size={24} color="black" />
                <Text style={{...Constant.h4, color:'black', fontWeight:'400'}}>500 m</Text>
            </View>
        </View>
      );

      const Icons = ({item}) => (
      <TouchableOpacity>
            <View style={{
                backgroundColor:item.color,
                width: screenWidth * 0.3,
                height: screenWidth * 0.3,
                borderRadius: 12,
                marginLeft:10,
                marginEnd:10,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                
            }}>
                <Image
                    source={item.icon}
                    resizeMode='center'
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius:50
                    }}
                />
                <Text style={{...Constant.h4, color: 'black'}}>{item.name?item.name:'error'}</Text>
            </View>
        </TouchableOpacity>)
        
     // Main view bellow
    return (
        <ScrollView style={{ 
            backgroundColor:'white',
           }}>
            {/* username block */}
            <View style={{ 
                flexDirection:'row',
                justifyContent:'space-between', 
                alignItems: 'center',
                width: screenWidth,
                marginBottom:40,
                marginTop:50,
                paddingRight:20,
                paddingLeft:20
                }}>
                <View style={{
                    justifyContent: 'center', 
                    flexDirection:'column',
                    }}>
                    <View>
                        <Text style={{...Constant.h4, color:'gray'}}>Good Morning</Text>
                    </View>
                    <View style={{
                    justifyContent: 'start', 
                    flexDirection:'row',
                    }}>
                        <Text style={Constant.h2}>{username?username:'King Mark'} </Text>
                        <Text style={Constant.h1}>{username}{username?',':''}</Text>
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
                        ...Constant.border2,
                        ...Constant.radius1,
                        ...Constant.padding,
                        width:screenWidth * 0.9,
                        height:50,
                        backgroundColor:'white',
                    }}
                    onChangeText={ setSearchInput }
                    value={ searchInput }
                    multiline={ false }
                    onFocus={()=>{toggleFocus()}}
                    placeholderTextColor="gray"
                    placeholder="Find a doctor, specialty or symptoms ..."
                />
                <View style={{
                    position:'absolute',
                    right:30,
                }}>
                  <EvilIcons name="search" size={30} color="black" />  
                </View>
            </View>

            <View style={{
                flexDirection:'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginBottom:20
            }}>
                <FlatList
                    data={Article}
                    renderItem={Icons}
                    // keyExtractor={item => item.name}
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
                <Text style={Constant.h2}>My Appointment</Text>
                <Text style={{...Constant.h2, ...Constant.gray}}>{'>'}</Text>
            </View>
            {/* Book appointment with doctor*/}
            <View style={{
                paddingLeft:10
            }}>
                <AppointmentCard />
            </View>
            {/* Learn more / info blog */}
            <View style={{
                ...Constant.padding,
                ...Constant.margin,
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-between'}}>
                <Text style={{
                    ...Constant.h2, 
                    }}>Nearby Doctors  </Text>
                <Text style={{...Constant.h4, color:'#5b5b5b'}}>{'Brooklyn, New York'}</Text>
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
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment="start"
                    decelerationRate="fast"
                    snapToInterval={screenWidth*0.95}
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
