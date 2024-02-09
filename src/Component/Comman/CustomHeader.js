import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';


const CustomHeader = ({title}) => {

      const navigation = useNavigation
  return (
   <View style={{backgroundColor:"#E31E24", height:110,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
    <View style={{flexDirection:"row", justifyContent:"space-between",marginHorizontal:20, marginTop:40}}>


          <Text>
    <Ionicons name="arrow-back" size={30} color="white" />; 

          </Text>
         
          <Text style={{color:"white", fontSize:24, fontWeight:"700"}}>{title}</Text>
          <Text></Text>
          </View>
      
   </View>
  )
}

export default CustomHeader
