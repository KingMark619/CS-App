import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Image,Text, Dimensions } from 'react-native-web'
import Constant from '../Constant'

const {width} = Dimensions.get('window')

export default function CategoryCard({item}) {
  return (
    <TouchableOpacity>
            <View style={{
                backgroundColor:item?item.color:'lightgray',
                width: width * 0.3,
                height: width * 0.3,
                borderRadius: 12,
                marginLeft:10,
                marginEnd:10,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                
            }}>
                <View style={{
                    width:60,
                    height:60,
                    borderRadius:60,
                    backgroundColor:'white'
                    }}>
                <Image
                    source={item?.icon}
                    resizeMode='center'
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius:50
                    }}
                />
                </View>
                <Text style={{...Constant.h4, color: 'black'}}>{item.name?item.name:'error'}</Text>
            </View>
        </TouchableOpacity>
  )
}
