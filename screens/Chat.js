import { 
  View, 
  Text, 
  TextInput, 
  ScrollView,
  TouchableOpacity, 
  Image, 
  SafeAreaView} from 'react-native';
import { app, db } from '../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import { Messages } from '../dummyData'
import { addDoc, collection, getDocs,orderBy, docs,query, where, onSnapshot } from '@firebase/firestore';
export default function Chat({navigation}) {

  const [messages, setMessages] = useState([])
  const auth = getAuth()
  useLayoutEffect(() => {
    checkTexts()
  },[])

   function checkTexts() {

    const q = query(collection(db, "Messages"), orderBy('createdAt', 'desc'));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const newTexts = [];
  querySnapshot.forEach((doc) => {
      newTexts.push({
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.seconds,
        text : doc.data().text,
        user: doc.data().user
      });
  });
  setMessages(newTexts)
});
  }


  const onSend = useCallback((messages = [])=>{
    setMessages(previouMessages => GiftedChat.append(previouMessages, messages))
    const {
      _id,
      createdAt,
      text,
      user
    } = messages[0]
    try {
      addDoc(collection(db, "Messages"),{
        _id,
      createdAt,
      text,
      user
      })
    } catch (err) {
      console.error(err)
    }
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
      showAvatarForEveryMessage={true} 
      onSend={messages => onSend(messages)} // upload firestore
      user={{
        _id: auth?.currentUser?.email,
        name: auth?.currentUser?.email,
        avatar: auth?.currentUser?.photoURL
      }}
      renderBubble={renderBubble}
      alwaysShowSend // display send button 
      scrollToBottom // allows to scrool down
      // scrollToBottomComponent={scrollToBottomComponent}
      // renderSend={renderSend}
    />
  )
}
