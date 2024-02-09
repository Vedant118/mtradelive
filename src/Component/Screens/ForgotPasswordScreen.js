import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomBotton from '../Comman/CustomButton/CustomBotton';
import CustomTextinput from '../Comman/CustomTextinput/CustomTextinput';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.Container}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{minHeight: '100%'}}
        alwaysBounceVertical={false}>
        <View style={styles.sectionLogin}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#000000',
              marginTop: 30,
            }}>
            User ID
          </Text>

          <CustomTextinput />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#000000',
              marginTop: 30,
            }}>
            Email ID
          </Text>

          <CustomTextinput />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#000000',
              marginTop: 30,
            }}>
            Name
          </Text>

          <CustomTextinput />

          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#000000',
              marginTop: 30,
            }}>
            Password
          </Text>

          <CustomTextinput />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#000000',
              marginTop: 30,
            }}>
            Confirm Password
          </Text>

          <CustomTextinput />

          <View style={{marginTop: 30}}>
            <CustomBotton title={'Submit'} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 30,
            }}>
            <Text style={{color: '#252B5C', fontSize: 15, fontWeight: '500'}}>
              Already have an Account?
            </Text>
            <Text
              style={{
                color: '#5d87ff',
                fontSize: 15,
                fontWeight: '500',
                marginHorizontal: 5,
              }}>
              Sign in
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },

  sectionLogin: {
    marginHorizontal: 20,
    marginVertical: 50,
    borderRadius: 5,
    //  backgroundColor:"#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  textpassword: {
    fontWeight: '600',
    fontSize: 14,
    color: '#d0d2d6',
  },
  forgotpassword: {
    fontWeight: '600',
    fontSize: 14,
    color: '#5d87ff',
  },
});
