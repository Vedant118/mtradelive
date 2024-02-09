import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppNavigator from './src/Component/Navigation/AppNavigator';

const App = ({navigation}) => {
  return (
    <>
    <AppNavigator/>
    </>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  
});

export default App;
