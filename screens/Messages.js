import { 
    View,
    Text,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity, 
    } from 'react-native';
import React, { useState, useEffect} from 'react';
import { app, db } from "../firebase"
import { collection, getDocs } from 'firebase/firestore';

import Constant from '../Constant';
import SearchBar from '../components/SearchBar';
import { DoctorList } from '../dummyData';
import { FlatList } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window')


export default function Messages({navigation,route}) {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        app,
        getMessages()
    },[])
   
    async function getMessages() {
        console.log('calling');
        const result = []
        try {
            const items = await getDocs(collection(db, "Messages"));
            items.forEach((doc) => {
                result.push(doc.data());
              });
              console.log(result);
              setMessages(result);
          } catch(err) {
            console.log(err); // TypeError: failed to fetch
          }        
      }    

    const ChatComponent = ({item}) => {
        return (
            <>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{
                flexDirection:'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 90,
                width:"100%",
                ...Constant.padding
            }}>
                {/* image block */}
                <Image
                    source={{uri: item.profile}}
                    resizeMode="cover"
                    style={{
                        width:60,
                        height:60,
                        borderRadius:30,
                        marginRight:20
                    }}
                />
                {/* text and time block */}
                <View style={{
                    justifyContent: 'space-between',
                    alignItems:'flex-start',
                    flex:1,
                    flexDirection:'column'
                }}>
                    <Text numberOfLines={1} style={{
                        fontWeight:'500',
                        fontSize:15,
                        letterSpacing:0.5,
                        }}>{item?.name? item.name: 'Doctor Mark'}</Text> 
                    <Text numberOfLines={1} style={{
                        fontWeight:'400',
                        fontSize:15,
                        letterSpacing:0.5,
                        color:'gray',
                        width:'90%'
                        }}>{item?.text?item.text:'Please check in about your last appointment'}</Text>
                </View>
                {/* time */}
                <View style={{
                    justifyContent:'flex-end',
                    alignItems:'flex-end',
                    alignSelf:'auto'
                }}>
                    <Text style={{...Constant.h5, color:'gray'}}>10:23 AM</Text>
                </View>
               
            </TouchableOpacity>
            <View style={{justifyContent:'center',alignItems:'center'}}>
               <View style={{
                    borderBottomColor:'#f5f5f5',
                    borderWidth:0.3,
                    width:'70%'
                }}/> 
            </View>
             
                </>
        )
    }

    const ChatProfile = ({item}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}
                style={{
                    flexDirection:'column',
                    justifyContent:'space-between',
                    alignItems:'center',
                    marginEnd:20,
                    width:80,
                    overflow:'hidden'
                }} 
            >
                <View>
                <Image
                    source={{uri: item?.profile}}
                    resizeMode='cover'
                    style={{
                        width:60,
                        height:60,
                        borderRadius:30,
                        
                    }}
                />
               
                </View>
                <View style={{ 
                    width:"100%",
                    justifyContent:'center',
                    alignItems:'center',
                    paddingTop:10
                }}>
                    <Text numberOfLines={1} style={{
                        fontWeight:'400',
                        fontSize:15,
                        letterSpacing:0.5,
                        color:'white'
                        }}>{item?.name? item.name: 'Dr Mark'}</Text>
                </View>
                
            </TouchableOpacity>
        )
    }

    // main return
  return (
    <ScrollView style={{
     
        backgroundColor:'white',
        }}>
        <View style={{
            paddingLeft:10,
            paddingRight:10, 
            paddingTop:60,
            paddingBottom:10,
            marginBottom:20,
            width:'100%',
            backgroundColor:'#24478a',
        }}>
            <Text style={{
                ...Constant.h1,
                marginBottom:20,
                color:'white',
                }}>Chats</Text>
            {/* input text field */}
            <SearchBar navigation={navigation}/>
            {/* recent chat heads */}
            <View
                style={{
                    marginTop:25,
                    marginBottom:40,
                    paddingLeft:15
                }}> 
                {/* scroll profile pics  */}
                <View style={{
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    alignItems:'center'
                }}>
                   <FlatList
                        data={DoctorList}
                        renderItem={ChatProfile}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        snapToAlignment="start"
                        decelerationRate="fast"
                        snapToInterval={width}
                   />
                </View>
            </View>
            {/* hide in case there are messages */}
        </View>
        {/* chat component */} 
            <View>
                    <FlatList
                        data={DoctorList}
                        renderItem={ChatComponent}
                        keyExtractor={item => item.id}
                        vertical
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        snapToAlignment="start"
                        decelerationRate="fast"
                        snapToInterval={width}
                   />
            
            </View>
    </ScrollView>
  );
}
