import React, { useState }from 'react'
import { 
    View, 
    Text, 
    ScrollView, 
    TextInput, 
    Dimensions } from 'react-native'
import { DoctorList } from '../dummyData'
import { Entypo } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default function Search({navigation}) {

    const [searchDetails, setSearchDetails] = useState('');
    const [data, setData] = useState([]);    
    
    const searchFilterFunction=(text)=>{
        console.log('search start')
            const newData = DoctorList.filter(word => word.name.includes(text.toLowerCase()))
            setData(newData)
            console.log(newData)
    }
  return (
    <ScrollView style={{
        backgroundColor: 'white',
    }}>
        {/* search input */}
       <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                 alignItems: 'center',
                 marginTop:70}}>
                <TextInput
                    style={{
                        height:45,
                        width:screenWidth * 0.8,
                        borderRadius:8,
                        backgroundColor:'#f5f2eb',
                        color:'#302f2c',
                        padding:10,
                    }}
                    placeholder="Search doctors"
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={text => setSearchDetails(text)}
                />
                <View style={{
                    marginStart:15
                }}>
                    <Entypo 
                        name="cross" 
                        size={24} 
                        color="#302f2c"
                        onPress={()=> navigation.goBack()} />
                </View>

            </View>
    </ScrollView>
  )
}