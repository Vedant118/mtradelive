import React from 'react'
import { View ,StyleSheet,Text} from 'react-native'

const Card = ({title,money}) => {
  return (
   <View style={styles.Container}>
     <Text style={styles.title}>{title}</Text>
     <Text style={styles.Money}>{money}</Text>
   </View>
  )
}

export default Card;
const styles = StyleSheet.create({
    Container: {

        backgroundColor:"#e8f1ff",
        paddingVertical:30,
        paddingHorizontal:15,
        elevation:3,
        // marginStart:8
    },
    title:{
        fontSize: 20,
        fontWeight: '400',
        color:"#000000",

    },
    Money:{
        fontSize: 15,
        fontWeight: '400',
        color:"#000000",
        marginTop:20
    }
})
