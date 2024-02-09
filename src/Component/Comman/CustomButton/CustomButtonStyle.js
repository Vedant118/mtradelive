import {StyleSheet,Dimensions} from 'react-native';
import {COLORS} from '../../Comman/Colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  
    btn: {
        width: "100%",       
         height: 50,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: COLORS.primary,
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
       
        backgroundColor: COLORS.primary
       },
    })