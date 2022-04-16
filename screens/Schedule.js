import { 
    View, 
    Text, 
    Image,
    Alert,
    Modal,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    StyleSheet
    } from 'react-native'
import React,{ useState} from 'react'
import Constant from '../Constant'
import * as Calendar from 'expo-calendar';
import CalendarPicker from 'react-native-calendar-picker'
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width

export default function Schedule({navigation}) {

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);


    // time array 
    const timeArray = [
      {
        id:0,
        time: '09:00',
        selected: true,
      },
      {
        id:1,
        time: '09:30',
        selected: false
      },
      {
        id:2,
        time: '10:00',
        selected: false
      },
      {
        id:3,
        time: '10:30',
        selected: false
      },{
        id:4,
        time: '11:00',
        selected: false
      },
      {
        id:5,
        time: '11:30',
        selected: false
      }
    ]
    const [availableTime, setAvailableTime] = useState(timeArray)

    // popUp screen 
    const PopUp = ({})=> {

      return (
        <View style={{
          justifyContent: 'space-around',
          alignItems: 'center',
          borderRadius:12,
          borderColor: 'lightgray',
          borderWidth:0.2,
          width:screenWidth * 0.7,
          height: 200,
          backgroundColor: 'white',
          shadowColor: 'black',
          shadowRadius:12,
          shadowOpacity: 1
        }}>
          <Text style={{
            fontSize:28,
            fontweight:'600',
          }}>Great !</Text>
          <Text style={{
            fontSize:18,
            fontweight:'500',
          }}>Your appointment is set</Text>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{
            borderColor:'lightgray',
            borderWidth:0.2,
            borderRadius:12,
            padding:10,
            backgroundColor: 'lightgreen'
          }} >
            <Text style={{fontSize:18,color:'black', fontWeight:'500'}}>Ok👌🏽</Text>
          </TouchableOpacity>
        </View>
      )
    }
    const selectTime = (index) => {
      // catch id of the selected time
      const updatedTimes = availableTime.map(item =>
        item.id === index
          ? { ...item, selected: !item.selected }
          : item
      );
      setAvailableTime(updatedTimes)
      return updatedTimes
    }
    
    const onDateChange = (date, type) => {
      //function to handle the date change
      if (type === 'END_DATE') {
        setSelectedEndDate(date);
      } else {
        setSelectedEndDate(null);
        setSelectedStartDate(date);
      }
    };
    // set appointments
    const setAppointment = () => {
      console.log('checking time and date')
      // check calendar for date
      const date = selectedStartDate
      const time = availableTime.filter(item =>
        item.selected === true 
        )
      // check availableTime
        if (time == '' || date == ''){
          alert('Please select a date and time')
        }
      // proceed to comfirmation page
      if (date && time){
        console.log(date)
        alert('Succesful Appointment')
        // navigation.replace('Appointment')
      }
    }
  return (
    <ScrollView style={{
        padding:16,
        flex:1,
        paddingTop:50,
        backgroundColor:'white',
    }}>
         <View style={{
                position:'fixed',
                top:0,
                left:0,
                zIndex:1000
            }}>
                <View style={{
                    justifyContent: 'center', 
                    alignItems: 'center'
                    }}>
                    <Text style={{...Constant.h2}}>Time</Text>
                </View>
                <TouchableOpacity onPress={()=> navigation.goBack()} style={{marginTop:-20}}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
          </View>
            {/* Calendar bellow */}
    <View style={{
        ...Constant.border,
        ...Constant.radius2,
        padding:0,
        marginTop:10,
        marginBottom:40
    }}>
        <CalendarPicker
      startFromMonday={true}
      minDate={new Date(2018, 1, 1)}
      maxDate={new Date(2050, 6, 3)}
      weekdays={
        [
          'M', 
          'T', 
          'W', 
          'T', 
          'F', 
          'S', 
          'S'
        ]}
      months={[
        'January',
        'Febraury',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]}
      previousTitle=""
      nextTitle=""
      todayBackgroundColor="#E7EFFD"
      todayTextStyle={{
          fontWeight:'600',
          color:'white',
          fontSize:15,
      }}
      customDayHeaderStyles={()=>{

      }}
      selectedDayColor="#6EA9FE"
      selectedDayTextColor="#FFFFFF"
      scaleFactor={375}
      previousTitleStyle={{
        fontSize:15, 
        fontWeight:'600',
        color:'black'
      }}
      nextTitleStyle={{
        fontSize:15, 
        fontWeight:'600',
        color:'black'
      }}
      monthTitleStyle={{
          fontSize:22, 
          fontWeight:'500'
      }}
      yearTitleStyle={{
        fontSize:1, 
        fontWeight:'600'
      }}
      textStyle={{
        color: '#000000',
        fontSize:14, 
        fontWeight:'500'
      }}
      onDateChange={onDateChange}
    />
        </View>
    <View style={{
        justifyContent: 'flex-start', 
        ...Constant.margin
        }}>
        <Text style={{...Constant.h2}}>Time</Text>
    </View>
    {/* Time selection */}
    <View style={{
      justifyContent: 'space-around',
      flexDirection: 'row',
      flexWrap:'wrap',
    }}>
      {availableTime.map((item,index) => <TouchableWithoutFeedback
      key={index} 
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => selectTime(index)}> 
      
       <View style={{ 
        flex: 1, 
        height:60,
        width:screenWidth * 0.35,
        backgroundColor: item.selected ?'lightblue':'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:12,
        borderWidth:0.2,
        borderColor:'lightgray',
        marginBottom:15
        }}>
          <Text style={{
            color:'black', 
            fontSize: 15,
            fontWeight: '500'
          }}>{item.time} AM</Text>
       </View>
    </TouchableWithoutFeedback>)}
    </View>
{/* modal */}
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.centeredView}>
          <PopUp/>
          </View>
    </Modal>
      
    {/* Appointment */}
    <View>
      <TouchableOpacity style={{
        borderRadius:8,
        backgroundColor: '#4368F6',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        height:50,
        width:200, 
        }}
        onPress={() => setModalVisible(true)}>
            <Text style={{...Constant.h4, color:'white'}}>Appointment</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});