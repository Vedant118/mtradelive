import React from 'react';
import {View, TextInput, Text, ScrollView, StyleSheet} from 'react-native';

const CustomShortinput = ({placeholder, value, onChangeText, type}) => {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={placeholder}
        value={value}
        keyboardType={type ? type : 'default'}
        placeholderTextColor={'black'}
      />
    </View>
  );
};

export default CustomShortinput;
export const styles = StyleSheet.create({
  input: {
    width: '50%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 5,
    alignSelf: 'center',
    // marginTop: 10,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
  },
});
