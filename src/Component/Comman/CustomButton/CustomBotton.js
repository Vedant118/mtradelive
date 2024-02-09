import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './CustomButtonStyle'

const CustomBotton = ({title, onClick}) => {
  return (
   <TouchableOpacity style={styles.btn}
   onPress={()=>{
    onClick
}}
   >
    <Text style={{color:"#FFFFFF",fontSize: 16, fontWeight:"600"}}>{title}</Text>

   </TouchableOpacity>

  )
}

export default CustomBotton
