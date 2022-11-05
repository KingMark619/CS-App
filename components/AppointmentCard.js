import React from 'react'
import { TouchableOpacity, Dimensions, View, Image, Text } from 'react-native'
const screenWidth = Dimensions.get('window').width
import Constant from '../Constant';
import { AntDesign} from '@expo/vector-icons'
import { image1 } from '../dummyData';

export default function AppointmentCard({profile, name, department, date, time}) {
  return (
    <TouchableOpacity style={{
        backgroundColor:'#aaedbc',
        width: screenWidth * 0.75,
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
               source={image1}
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
               justifyContent: 'space-around',
               alignItems: 'flex-start'
           }}>
               <Text style={Constant.h3}>{name ? name :'Dr. Muhammed'}</Text>
               <Text style={{...Constant.h4, color:'#5b5b5b', fontWeight:'300'}}>{department? department : 'General Medicine'}</Text>
           </View>
       </View>
       {/* second row */}
       <View style={{
           flexDirection:'row',
           justifyContent:'start',
           alignItems: 'center',
           backgroundColor:'#fff',
           padding: 10,
           paddingTop:5,
           paddingBottom:5,
           borderRadius:12,
           marginBottom:5,
           width:'88%'
       }}>
           <AntDesign name="clockcircleo" size={20} color="black" />
           <Text style={{...Constant.h4, 
               ...Constant.black, marginStart:5}}>{date ? date : 'Mon, July 29'}</Text>
           
           <Text style={{...Constant.h4, 
               ...Constant.black}}>{time ? time : ' at 09:25 - 09:45'}</Text>
       </View>
   </TouchableOpacity>
  )
}
