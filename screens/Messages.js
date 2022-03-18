import { 
    View,
    Text,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity, 
    Button} from 'react-native';
import React, { useState, useEffect} from 'react';
import { getAuth } from 'firebase/auth';

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
// import db from "../firebase"

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

import { initializeApp } from "firebase/app";
import { app, db } from "../firebase"

export default function Messages({navigation,route}) {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        app,
        getMessages()
    },[])
   
    async function getMessages() {
        console.log('calling');
        console.log(route.params)
        console.log(navigation)
        
        const result = []
        const items = await getDocs(collection(db, "messages"));
        items.forEach((doc) => {
          result.push(doc.data());
        });
        console.log(result);
        setMessages(result);
      }    

    const ChatComponent = ({message}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{
                flexDirection:'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding:5,
                height: 90,
                width:"100%",
                borderBottomColor:'lightgray',
                borderBottomWidth:1
            }}>
                {/* image block */}
                <Image
                    source={{uri: 'https://placeimg.com/140/140/any'}}
                    resizeMode="cover"
                    style={{
                        width:50,
                        height:50,
                        borderRadius:25,
                    }}
                />
                {/* text and time block */}
                <View style={{
                    justifyContent: 'center',
                    alignItems:'flex-start',
                    width:'80%'
                }}>
                    <Text style={{
                        fontSize:18,
                        color:'#302f2c',
                        fontWeight:"500",
                        }}>{message.displayName}</Text> 
                    <Text style={{
                        fontSize:15,
                        color:'gray',
                        fontWeight:"300",
                        }}>{message.text}</Text>
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
                        width:50,
                        height:50,
                        borderRadius:25,
                        marginEnd:10
                    }}
                />
            </TouchableOpacity>
        )
    }

    // main return
  return (
    <ScrollView style={{backgroundColor:'white'}}>
        {/* Main view */}
        <View style={{
            paddingTop:50, 
            backgroundColor:'#4368F6'
            }}>
        {/* Search bar and profile icons */}
        <View style={{
            backgroundColor:'#4368F6',
            padding:10}}>
            <Text style={{
                fontSize:25,
                fontWeight:'700'
                }}>Chat with your doctors</Text>
            <ScrollView 
                horizontal={true}
                style={{
                    marginTop:25,
                    marginBottom:40,
                    backgroundColor:'#4368F6'
                }}> 
                {/* scroll profiel pics  */}
                <View style={{
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    alignItems:'center'
            }}>
                { messages.map((message)=>{
                    <ChatProfile message={message}/>
                })}
                
                </View>
                
            </ScrollView>
        </View>
        {/* View for empty content */}
        
        {/* chats */}
        <View style={{
            backgroundColor:'white',
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
            marginTop:-25,
            height:'100%',
        }}>
            <TouchableOpacity onPress={()=>navigation.navigate('Appointment')}>
            <Text style={{
                color:'gray', 
                fontSize:15,
                fontWeight:'400',
                alignSelf: 'center',
                marginVertical:150,
                textDecorationStyle:'solid',
                textDecorationLine:'underline'
                }}> Get in touch with your doctor today</Text>
            </TouchableOpacity>
        {/* chat component */} 
               { messages.map((message)=>{
                   <ChatComponent message={message} />
               })}
        </View>
    </View>    
    </ScrollView>
  );
}
