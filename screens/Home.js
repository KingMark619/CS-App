import React, { useState, useEffect } from 'react'
import Constant from '../Constant'
import { 
    FontAwesome5, 
    AntDesign, 
    EvilIcons, 
    MaterialCommunityIcons } from '@expo/vector-icons';
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
import { Specialties, Article, image2, image3, image4 } from '../dummyData';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import GithubIcon from 'react-native-eva-icons/icons/Github';

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

     const TestResult = ({name, desc, icon}) => {
        return (
        <TouchableOpacity style={{
            width:screenWidth*0.9,
            height: screenWidth*0.18,
            borderRadius:18,
            marginBottom:15,
            backgroundColor:'#f5f5f5',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent:'space-between',
                alignItems: 'center',
                marginStart:12
            }}>
            <View style={{
                width:60,
                height:60,
                borderRadius:18,
                backgroundColor:'white',
                justifyContent:'center',
                alignItems: 'center',
            }}>
                <Text style={{fontSize:20}}>{icon?icon:'🩸'}</Text>
            </View>
            <View style={{
                flexDirection:'column',
                paddingLeft:10
            }}>
                <Text style={{fontWeight:'600', fontSize:15}}>{name?name:'Test Result'} </Text>
                <Text style={{fontWeight:'600', fontSize:15}}>{desc?desc:''} </Text>
            </View>
            </View>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-evenly',
                alignItems: 'center',
                width:45,
                height:45,
                borderRadius:12,
                backgroundColor:'white',
                marginEnd:12
            }}>
                <Image
                source={require('../assets/icons/right.png')}
                resizeMode='cover'
                style={{
                    width: 25,
                    height:25,
                }}
            />
            </View>
        </TouchableOpacity>)
     }

     const NearbyDoctors = ({ item }) => (
        <View style={{
            width:screenWidth*0.9,
            height: screenWidth*0.18,
            borderRadius:18,
            marginEnd:12,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor:'#f5f5f5'
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent:'space-evenly',
                alignItems: 'center',
                paddingLeft:12,
            }}>
            <View style={{
                width:60,
                height:60,
                borderRadius:12,
                
                backgroundColor:'white',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                source={image3}
                resizeMode='cover'
                style={{
                    width: 30,
                    height:30,
                }}
            />
            </View>
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
                backgroundColor:'#afe7f2',
                marginEnd:12
                
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
                width: screenWidth * 0.32,
                height: screenWidth * 0.38,
                borderRadius: 12,
                marginLeft:10,
                marginEnd:10,
                paddingLeft: 20,
                justifyContent: 'space-around',
                alignItems: 'flex-start',
                
            }}>
                <View style={{
                    width:50,
                    height:50,
                    borderRadius:12,
                    backgroundColor:'white'
                    }}>
                <View style={{
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{fontSize:30}}>{item.emoji}</Text>
                </View>
                {/* <Image
                    source={item.icon}
                    resizeMode='center'
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius:50
                    }}
                /> */}
                </View>
                <View style={{ 
                    marginTop:-10, 
                    justifyContent: 'space-between', 
                    flexDirection:'column',
                    alignItems: 'flex-start'}}>
                    <Text style={{...Constant.h4,fontWeight:'bold',fontSize:15, color: 'white'}}>{item.name?item.name:'error'}</Text>
                    <Text style={{...Constant.h4, color: '#f5f5f5'}}>{item.amount?item.amount:'error'}{item?' Doctors':''}</Text>
                </View>
                
            </View>
        </TouchableOpacity>)
        
     // Main view bellow
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ 
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
                    flexDirection:'row',
                    }}>
                        <View>
                            <Image
                                source={photoURL? {uri: photoURL} :require('../assets/doctor.png')}
                                resizeMode='cover'
                                style={{
                                width:60,
                                height:60,
                                borderRadius: 50 }}
                            />
                        </View>
                    <View style={{
                        justifyContent: 'center',
                        flexDirection:'column',
                        marginStart:10
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
                    
                </View>
                <TouchableOpacity>
                    <Image
                        source={ require('../assets/icons/menu-2-outline.png')}
                        resizeMode='cover'
                        style={{
                            width:40,
                            height:40, }}
                    />
                </TouchableOpacity>
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
                ...Constant.padding,
                ...Constant.margin,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={Constant.h2}>Category</Text>
                <Text style={{...Constant.h2, ...Constant.gray}}>{'>'}</Text>
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
                <Text style={Constant.h2}>Your test result</Text>
                <Text style={{...Constant.h2, ...Constant.gray}}>{'>'}</Text>
            </View>
            {/* Book appointment with doctor*/}
            <TouchableOpacity onPress={()=>{navigation.replace('Onboarding')}}>
                {/* <Text>Onboarding</Text> */}
                
            </TouchableOpacity>
            <View style={{
                paddingLeft:10,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TestResult name={'General Blood'} desc={'Analysis'} icon={'🩸'} />
                <TestResult name={'Antibody Test'} desc={'SARS-CoV-2'} icon={'🦠'} />
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
                marginStart:10,
                ...Constant.margin,
                }}>
                <FlatList
                    data={Article}
                    renderItem={NearbyDoctors}
                    keyExtractor={item => item.title}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment="start"
                    decelerationRate="fast"
                    snapToInterval={screenWidth*0.1}
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
