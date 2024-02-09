import React from 'react';
import {View, TextInput, Text, ScrollView, SafeAreaView} from 'react-native';
import {styles} from './CustomTexinputStyle';

const CustomTextinput = ({placeholder, value, onChangeText, type}) => {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={placeholder}
        value={value}
        keyboardType={type ? type : 'default'}
        placeholderTextColor={'black'}
        style={{...styles.textInput}}
        
      />
    </View>
  );
};

export default CustomTextinput;
