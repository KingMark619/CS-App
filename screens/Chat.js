// import { 
//   View, 
//   Text, 
//   TextInput, 
//   ScrollView,
//   TouchableOpacity, 
//   Image, 
//   SafeAreaView} from 'react-native';
// import { Messages } from '../dummyData'
import React, 
  { useEffect,
    useState,
    useCallback,
    useLayoutEffect } from 'react';
import { db } from '../firebase'
import { getAuth } from "firebase/auth";
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import { 
  addDoc, 
  collection,
  orderBy,
  query, 
  onSnapshot } from '@firebase/firestore';

export default function Chat({navigation}) {
  // add naviagation button back to previous screen. 
  const [messages, setMessages] = useState([])
  const auth = getAuth()

  useLayoutEffect(() => {
    checkTexts()
  },[])

   function checkTexts() {
    // get texts from firebase and order them by date 
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

  //send message
  const onSend = useCallback((messages = [])=>{
    setMessages(previouMessages => GiftedChat.append(previouMessages, messages))
    const {
      _id,
      createdAt,
      text,
      user
    } = messages[0] // assign to the first item in array message
    try {
      addDoc(collection(db, "Messages"),{
        _id,
      createdAt,
      text,
      user
      })
    } catch (err) {
      console.error(err)
      // display error for the user here.
      // create a error comp that takes in error message and some type of icon
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
  // for more info check giftedChat github repo.
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
      onSend={ messages => onSend(messages) } // upload firestore
      user={{
        _id: auth?.currentUser?.email, // set failsafe here. to login before messaging is available to user
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
