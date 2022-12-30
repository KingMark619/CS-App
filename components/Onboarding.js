import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import { Image, TouchableOpacity, View, Text } from 'react-native'


const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? '#4381F5' : 'lightgray'
    return (
    <View
    style={{
        width:15,
        height:15,
        borderRadius:100,
        marginHorizontal:10,
        backgroundColor
    }}
    />
    )
}
const Next = ({...props}) => {
    return (
        <TouchableOpacity {...props} style={{
            backgroundColor: '#4381F5',
            width:100,
            height:30,
            borderRadius:50,
            marginEnd:10,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Next</Text>
        </TouchableOpacity>
    )

}
const Done = ({...props}) => {
    return (
        <TouchableOpacity {...props} style={{
            backgroundColor: '#EF8693',
            width:100,
            height:30,
            borderRadius:50,
            marginEnd:10,
            justifyContent:'center',
            alignItems:'center'
        }}>
            
            <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Get Started</Text>
        </TouchableOpacity>
    )

}

export default function Test({navigation}) {
  return (
    <Onboarding
    onSkip={() => navigation.replace("Home")}
    onDone={() => navigation.replace("Home")}
    DotComponent={Dots}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    bottomBarHighlight={false}
    pages={[
        {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/onboarding/1.png')} style={{
                width:350,
                height:350
            }} />,
            title: 'Need A Doctor',
            subtitle: 'HomeCares doctor at home service provides expert care for vou and vour tamilv that encompasses dav-to-dav healthcare needs as well as long term assistance',
            
        },
        {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/onboarding/2.png')} style={{
                width:350,
                height:350
            }} />,
            title: 'Health Advice',
            subtitle: 'arverva@ Hecite insores ano emoowers people to live their negitiest lives, every aay, through trusted. medicallv reviewed information and expert',
        },
        {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/onboarding/3.png')} style={{
                width:350,
                height:350
            }} />,
            title: '24x7 Home Services',
            subtitle: 'We provide low cost ambulance services with complete ICU Backup, advance life support. FUlly Medica Equipped 100% sanitised Ambulance Available at Your Doorstep!',
        },
    ]}
/>
  )
}
