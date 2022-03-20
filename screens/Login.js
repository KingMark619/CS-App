import React, { useState, useEffect } from 'react'
import { 
    View,
    ScrollView, 
    Text, 
    Image, 
    TextInput, 
    Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
// add multiple ways to login . ( facebook, apple, google etc.. )

const loginWithWithSocialMedia = (type)=>{
    console.log(type)
    switch(type){
        case 'facebook':{
            // facebook login
        }
        case 'apple':{
            // apple login
        }
        case 'instagram':{
            // instagram login
        }
        case 'twitter':{
            // twitter login
        }
        default: return false
    }
}


export default function Login({navigation}) {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const nav = () => {
        navigation.navigate('Messages', {user:getAuth()})
    }
    // checking and setting auth 
    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
      }
      useEffect(() => {
          const auth = getAuth();
        const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);

    const checkTextField = () => {
       
        const auth = getAuth();
        // check email and password
        // let validEmail = false
        // let validPassword = false
        // // regex to check password and email 
        // const mailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        // const passwordFormat = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/

        // if(!email.match(mailFormat)){
		//     alert("This is not a valid email address");
		//     return validEmail = true;
		// }
        // if(!password.match(passwordFormat)){
        //     alert("Invalid, make sure password has 8-20 characters, a number and a special characters");
		//     return  validPassword = true;
        // }
        // success, check with firebase and connect user 
      
            console.log("login in")
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const signedInUser = userCredential.user;
            const userData = signedInUser?.providerData[0];
            const uid = signedInUser?.uid;
            console.log(userData)
            alert('Login successful')
            // navigation.replace('Home',{email})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage)
          });
    }

    return (
        <ScrollView style={{ 
            backgroundColor:'white', 
            height: screenHeight,
            paddingTop:80
            }}>
                {/* setting button */}
            <View style={{
                position:'fixed',
                top:0,
                left:10,
                zIndex:1000
            }}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name="ios-chevron-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {/* create form to sign up */}
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'white',
                }}>
            <View style={{
                flexDirection:'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:50
                }}>
            <Image
                source={require('../assets/drc.png')}
                resizeMode='center'
                style={{
                    width: 70,
                    height:70,
                    borderRadius: 10,
                }}
            />

            </View>
            {/* email, password, phone number ?, */}
            <View style={{
                marginTop:50,
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
                    placeholder="Enter your email address"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={{
                        borderRadius: 12,
                        width:screenWidth * 0.9,
                        borderColor:'lightgray',
                        borderBottomWidth:1, 
                        height:50,
                        padding:10,
                    }}
                    placeholder="Enter your email password"
                    onChangeText={setPassword}
                    value={password}
                />
            </View>
            <TouchableOpacity onPress={checkTextField}>
                <View style={{
                    backgroundColor:'#4368F6',
                    width:screenWidth * 0.5,
                    height:40, 
                    borderRadius:12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:50
                    }}>
                    <Text style={{
                        fontSize:15,
                        fontWeight: '500',
                        color:"white"
                        }}>Login</Text>
                </View>
            </TouchableOpacity>
            {/* already have an account */}
            <TouchableOpacity onPress={()=> navigation.goBack()}
                style={{
                    marginTop:30,
                    left: 90,
                    position: 'relative',
                }} >
                <Text style={{
                        fontSize:15,
                        fontWeight: '300',
                        color:"gray",
                        textDecorationStyle:'solid',
                        textDecorationLine:'underline'
                        }}>New to this app? Sign Up</Text>
            </TouchableOpacity>
            {/* Sign up with social media */}
            <View style={{
                flexDirection:'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop:70,
                width:screenWidth * 0.8
            }}>
                <TouchableOpacity onPress={()=>loginWithWithSocialMedia('facebook')} style={{
                    borderColor:'lightgray', 
                    borderWidth:1,
                    borderRadius: 50,
                    padding:7,
                    backgroundColor:'blue',}}>
                    <Feather name="facebook" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>loginWithWithSocialMedia('twitter')}>
                    <Feather name="twitter" size={40} color="lightblue" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>loginWithWithSocialMedia('instagram')}>
                    <Feather name="instagram" size={40} color="red" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>loginWithWithSocialMedia('apple')} style={{marginTop:-5}}>
                    <AntDesign name="apple1" size={40} color="black" />
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    )
}
