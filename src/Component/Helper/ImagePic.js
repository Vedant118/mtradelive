import React,{useState} from 'react';
import { Text, View,StyleSheet, TouchableOpacity, Image, } from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AntDesign from 'react-native-vector-icons/AntDesign';


const ImagePic = () => {

    const [image, setSelectImage] = useState("");


    const takePhotoCamera = () =>{
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          console.log(image);
          setSelectImage(image.path)
  
        });
      }
  
      const choosePhoto = () =>{
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image);
         
          setSelectImage(image.path)
  
        });
      }



  return (

    <>
    <TouchableOpacity  onPress={takePhotoCamera}>
    <Text style={{marginTop:"20%", alignSelf:"center"}}>
    <AntDesign name="camerao" size={30} color="#900" 
    />;

    </Text>
   
   
   
    </TouchableOpacity>

    
<TouchableOpacity  onPress={choosePhoto}>
<Text style={{marginTop:"20%", alignSelf:"center"}}>
    <MaterialCommunityIcons name="view-gallery" size={30} color="#900" 
    />;

    </Text>
   
   
    </TouchableOpacity>

    <Image src={image} style={{height:"50%", width:"80%", alignSelf:"center",marginTop:"20%",}}
    />
    </>
   
   
  )
}

export default ImagePic;

const styles = StyleSheet.create({})

