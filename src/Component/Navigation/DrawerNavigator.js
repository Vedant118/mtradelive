import React, { useRef, useState } from 'react'
import { View,Text ,TouchableOpacity,Animated,} from 'react-native'
import Users from '../images/Users.svg';

const DrawerNavigator = () => {

  const [showMenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(0)).current;

  return (
   <View style={{flex:1,backgroundColor:"green"}}>
    <Animated.View style={{
      flex:1,
      backgroundColor:"white",
      position:"absolute",
      left:0,
      right:0,
      bottom:0,
      top:0,
      transform:[{scale:scale}, {translateX:moveToRight}]
    }}>
      <View style={{flexDirection:"row",marginTop:50}}>
<TouchableOpacity style={{marginLeft:20}}
onPress={()=>{
  Animated.timing(scale,{
    toValue:showMenu ? 1: 0.8,
    duration:300,
    useNativeDriver:true,
  }).start();
  Animated.timing(moveToRight,{
    toValue:showMenu ? 0: 230,
    duration:300,
    useNativeDriver:true,
  }).start();
}}
>
<Users width={30} height={30}/>
</TouchableOpacity>
      </View>

    </Animated.View>

   </View>
  )
}

export default DrawerNavigator;
