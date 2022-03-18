import { 
  View, 
  Text, 
  TextInput, 
  ScrollView,
  TouchableOpacity, 
  Image, 
  SafeAreaView} from 'react-native';
import { app, db } from '../firebase'
import React, { useEffect, useState, useCallback } from 'react';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import { Messages } from '../dummyData'
export default function Chat({navigation}) {

  const [messages, setMessages] = useState([])

  useEffect(()=> {
    setMessages( Messages
    //   [
    //   {
    //     _id: 1,
    //     text:'Hello there',
    //     createdAt: new Date(),
    //     user: {
    //       _id:2,
    //       name:'Johnny boy',
    //       avatar:'https://placeimg.com/140/140/any',
    //     }
    //   }
    // ]
    )
  }, [])


  const uploadMessages = ()=> {
    try {
        const docRef =  addDoc(collection(db, "messages"), {
          text:'nadane khkh',
          nuts: ' deez'
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

  const onSend = useCallback((messages = [])=>{
    setMessages(previouMessages => GiftedChat.append(previouMessages, messages))
  },[])

const renderBubble = (props) => {
  // create a style for the chat bubble.
  // choose left for receiver and right for sender
  return (
  <Bubble 
    {...props}
    wrapperStyle={{
      right:{
        backgroundColor: '#4368F6',
        padding: 3
      },
      left:{
        padding: 3
      }
    }}
    textStyle={{
      right:{
        color: 'white'
      }
    }}
  />
  )
}

const renderSend = (props) => {
  return(
    
    <Send
      {...props}

    />
  )
}

  return (
    
    <GiftedChat
      messages={messages} // get array from firestore 
      onSend={messages => onSend(messages)} // upload firestore
      user={{
        _id:1
        //name
        //avatar
      }}
      renderBubble={renderBubble}
      alwaysShowSend // display send button 
      scrollToBottom // allows to scrool down
      // scrollToBottomComponent={scrollToBottomComponent}
      // renderSend={renderSend}
    />
  )
 

  // let [message, setMessage] = useState('')

  // return (
  //   <ScrollView style={{ backgroundColor:'white'}}>
  //     {/* Header section */}
  //     <View style={{
  //       position:'fixed',
  //       top: 0,
  //       left: 0,
  //       height:100,
  //       width:'100%',
  //       flex:1,
  //       justifyContent: 'flex-start',
  //       alignItems: 'center',
  //       backgroundColor:'#4368F6',
  //       flexDirection: 'row',
  //       padding:10,
  //       paddingTop:50
  //     }}>
  //       <Image
  //         source={require('../assets/memoji.jpeg')}
  //         resizeMode='cover'
  //         style={{
  //             width:45,
  //             height:45,
  //             borderRadius:10,
  //             marginEnd:10
  //         }}
  //       />
  //       {/* name and category */}
  //       <View style={{ 
  //         flexDirection:'column',
  //         justifyContent: 'flex-start', 
  //         alignItems: 'flex-start'}}>
  //         <Text style={{
  //           fontSize:18,
  //           fontWeight: '500',
  //           color: 'white'
  //         }}>Doctor Gabriel</Text>
  //         <Text style={{
  //           fontSize:15,
  //           fontWeight: '400',
  //           color: 'white'
  //         }}>Cardiologist</Text>
  //       </View>
  //     </View>
  //     {/* name and back button */}
  //     {/* bubble chats */}
  //     {/* sender */}
  //     {/* receiver */}
  //     {/* text input with button */}
  //     <View style={{
  //       position:'fixed',
  //       bottom: 0,
  //       paddingLeft:10, 
  //       paddingRight:10
  //     }}>
  //       <TextInput
  //       style={{
  //         height:50,
  //         width: '100%',
  //         borderRadius:8,
  //         borderColor:'lightgray',
  //         borderWidth:1,
  //         paddingRight:60,
  //         paddingLeft:10,
  //         paddingBottom:10,
  //         paddingTop:10
  //       }}
  //         onChangeText={setMessage}
  //         value={message}
  //         multiline={true}
  //         placeholder="Send a message..."
  //       />
  //       <TouchableOpacity style={{
  //         position:'absolute',
  //         right:20,
  //         top:10,
  //         }}>
  //       <Text style={{
  //         fontSize:15,
  //         fontWeight:'600',
  //         color: '#4368F6',
  //       }}>Send</Text>
  //       </TouchableOpacity>
  //     </View>

  //   </ScrollView>
  // );
}
