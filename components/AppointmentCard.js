import React from 'react'

export default function AppointmentCard({profile, name, department, date, time}) {
  return (
    <TouchableOpacity style={{
        backgroundColor:'#4368F6',
        width:screenWidth*0.92,
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
               source={{uri: 'https://placeimg.com/140/140/any'}}
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
               justifyContent: 'space-between',
               alignItems: 'flex-start'
           }}>
               <Text style={Constant.h3}>{name ? name :'Dr Muhammed'}</Text>
               <Text style={{...Constant.h4, ...Constant.gray}}>{department? department : 'General Medicine'}</Text>
           </View>
       </View>
       {/* second row */}
       <View style={{
           flexDirection:'row',
           justifyContent:'space-around',
           alignItems: 'center',
           backgroundColor:'#99c9f0',
           padding: 10,
           paddingTop:20,
           paddingBottom:20,
           borderRadius:8,
           marginBottom:5
       }}>
           <AntDesign name="calendar" size={20} color="white" />
           <Text style={{...Constant.h4, 
               ...Constant.white}}>{date ? date : 'Monday, July 29'}</Text>
           <AntDesign name="clockcircleo" size={20} color="white" />
           <Text style={{...Constant.h4, 
               ...Constant.white}}>{time ? time : '11:00 - 12:00 AM'}</Text>
       </View>
   </TouchableOpacity>
  )
}
