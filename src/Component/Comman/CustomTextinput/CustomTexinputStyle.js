import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../Comman/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 5,
    alignSelf: 'center',
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginBottom:20,
    color:'black'
  },
});
