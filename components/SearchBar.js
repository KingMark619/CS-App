import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import Constant from '../Constant';

const screenWidth = Dimensions.get('window').width
export default function SearchBar({navigation}) {
  return (
    <View style={{
        justifyContent: 'center',
         alignItems: 'center',
         marginBottom:20}}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')} 
            style={{
             height:50,
             width:screenWidth * 0.8,
             ...Constant.radius2,
             backgroundColor:'#f7f7f7',
             padding:10,
             flexDirection: 'row',
             justifyContent: 'space-between'
        }}>
            <Text style={{ color:'gray', alignSelf: 'center'}}>Search for doctors</Text>
            <Feather name="search" size={24} color="#302f2c" />
        </TouchableOpacity>
    </View>
  )
}