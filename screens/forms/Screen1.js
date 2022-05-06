import { View, Text, TextInput, Dimensions,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Constant from '../../Constant'
import { Picker} from '@react-native-picker/picker'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const screenWidth = Dimensions.get('window').width

export default function Screen1({navigation}) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email,setEmail] = useState('')

    const [country, setCountry] = useState('Unknown');
    const [selectedValue, setSelectedValue] = useState("java");

  return (
    <ScrollView style={{
        paddingRight:10,
        paddingLeft:10,
        paddingTop:60
    }}>
        <Text style={{
                ...Constant.h1,
                marginBottom:20
                }}>Personal Information</Text>
        <View style={styles.screen}>
      <Picker
        selectedValue={country}
        onValueChange={(value, index) => setCountry(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select your country" value="Unknown" />
        <Picker.Item label="10" value="Australia" />
        <Picker.Item label="20" value="Belgium" />
        <Picker.Item label="30" value="Canada" />
        <Picker.Item label="40" value="India" />
        <Picker.Item label="50" value="Japan" />
      </Picker>

    </View>
      <View style={{
          paddingTop:20,
          justifyContent: 'center',
          alignItems: 'center'
      }}>
        <TextInput
            style={{
                borderRadius: 12,
                width:screenWidth * 0.9,
                borderColor:'lightgray',
                borderBottomWidth:1,
                height:50,
                padding:10,
                marginBottom:15
            }}
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
        />
        <TextInput
            style={{
                borderRadius: 12,
                width:screenWidth * 0.9,
                borderColor:'lightgray',
                borderBottomWidth:1,
                height:50,
                padding:10,
                marginBottom:15
            }}
            placeholder="Last Name"
            onChangeText={setLastName}
            value={lastName}
        />
        <TextInput
            style={{
                borderRadius: 12,
                width:screenWidth * 0.9,
                borderColor:'lightgray',
                borderBottomWidth:1,
                height:50,
                padding:10,
                marginBottom:15
            }}
            placeholder="Middle Name *"
            onChangeText={setMiddleName}
            value={middleName}
        />
        <TextInput
            style={{
                borderRadius: 12,
                width:screenWidth * 0.9,
                borderColor:'lightgray',
                borderBottomWidth:1,
                height:50,
                padding:10,
                marginBottom:15
            }}
            placeholder="Address"
            onChangeText={setAddress}
            value={address}
        />
        <TextInput
            style={{
                borderRadius: 12,
                width:screenWidth * 0.9,
                borderColor:'lightgray',
                borderBottomWidth:1,
                height:50,
                padding:10,
                marginBottom:15
            }}
            placeholder="Phone number"
            keyboardType="numeric"
            onChangeText={setPhone}
            value={phone}
        />
        <TextInput
            style={{
                borderRadius: 12,
                width:screenWidth * 0.9,
                borderColor:'lightgray',
                borderBottomWidth:1,
                height:50,
                padding:10,
                marginBottom:15
            }}
            placeholder="Email *"
            onChangeText={setEmail}
            value={email}
        />
        <TouchableOpacity onPress={()=> navigation.navigate('Screen2')} style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf:'baseline',
            backgroundColor:'lightblue',
            ...Constant.radius2,
            height:50,
            width:90,
        }}>
            <Text style={{...Constant.h3}}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'lightblue'
    },
    text: {
      fontSize: 24,
    },
    picker: {
      marginVertical: 30,
      width: 300,
      padding: 10,
      borderWidth: 1,
      borderColor: "#666",
    },
    container: {
        
        alignItems: "center"
      }
  });