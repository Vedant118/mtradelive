import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../Colors';

const CustomShortBotton = ({title, onClick}) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        onClick();
      }}>
      <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '600'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomShortBotton;
export const styles = StyleSheet.create({
  btn: {
    width: '30%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: COLORS.secondary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 10,

    backgroundColor: COLORS.secondary,
  },
});
