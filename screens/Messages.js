import { 
    View,
    Text,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity, 
    } from 'react-native';
import React, { useState, useEffect} from 'react';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { app, db } from "../firebase"
import { 
    getFirestore,
     collection,
     query,
     where,
     setDoc, 
     doc, 
     addDoc, 
     getDoc, 
     getDocs, 
     orderBy, 
     limit, } from 'firebase/firestore';

import Constant from '../Constant';
import SearchBar from '../components/SearchBar';

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

    const ChatComponent = ({message}) => {
        return (
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
                    source={{uri: 'https://placeimg.com/140/140/any'}}
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
                    justifyContent: 'flex-start',
                    alignItems:'flex-start',
                    flex:1
                }}>
                    <Text style={{
                        ...Constant.h4
                        }}>{message?.displayName? message.displayName: 'Doctor ZHupar'}</Text> 
                    <Text style={{
                        ...Constant.h4, color:'gray'
                        }}>{message?.text?message.text:'text here hjedej dhejd'}</Text>
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
        )
    }

    const ChatProfile = ({message}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
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
                {/* display text if doctor online and available */}
                <Text style={{
                    fontSize:8,
                    position:'absolute',
                    right:25,
                    }}>🟢</Text>
            </TouchableOpacity>
        )
    }

    // main return
  return (
    <ScrollView style={{
        paddingLeft:10, 
        paddingRight:10, 
        backgroundColor:'white',
        paddingTop:60,}}>
        <View>
            <Text style={{
                ...Constant.h1,
                marginBottom:20
                }}>Get in touch</Text>
            {/* input text field */}
            <SearchBar navigation={navigation}/>
            {/* recent chat heads */}
            <ScrollView 
                horizontal={true}
                style={{
                    marginTop:25,
                    marginBottom:40,
                }}> 
                {/* scroll profile pics  */}
                <View style={{
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    alignItems:'center'
                }}>
                    <ChatProfile />
                    <ChatProfile />
                    <ChatProfile />
                    
                { messages.map((message)=>{
                    <ChatProfile message={message}/>
                })}
                </View>
            </ScrollView>
            {/* hide in case there are messages */}
            
        {/* chat component */} 
        <ChatComponent />
        
               { messages?.map((message)=>{
                   <ChatComponent message={message} />
               })}
        </View>
    </ScrollView>
  );
}
