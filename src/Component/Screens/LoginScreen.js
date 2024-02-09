import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <ScrollView alwaysBounceVertical={false}>
        <View style={styles.sectionLogin}>
          <View style={styles.logo}>
            <Image
              source={require('../images/logo.png')}
              style={{width: 70, height: 85}}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#000000',
              marginVertical: 10,
            }}>
            User ID
          </Text>

          <TextInput
            placeholder="Email or Phone Number"
            placeholderTextColor="#252B5C"
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#252B5C',
              paddingHorizontal: 20,
              borderWidth:.5,
              borderRadius: 8,
              borderColor:'grey'
            }}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#000000',
              marginVertical: 10,
            }}>
            Password
          </Text>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#252B5C"
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#252B5C',
              paddingHorizontal: 20,
              borderWidth:.5,
              borderRadius: 8,
              borderColor:'grey'
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <Text style={styles.textpassword}>Remember This Device</Text>
            <TouchableOpacity  onPress={() => {
              navigation.navigate('ForgotPasswordScreen');
            }}>
            <Text style={styles.textpassword}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              borderWidth: 0.5,
              alignSelf: 'center',
              paddingLeft: 20,
              borderRadius: 12,
              marginVertical: 20,
              backgroundColor: '#1f6feb',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#E31E24',
            }}
            onPress={() => {
              navigation.navigate('Dashboard');
            }}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 16,textAlign:'center'}}>
              Login
            </Text>
          </TouchableOpacity>
          <Text style={styles.register}>New To M-Trade?  <Text style={styles.registertext2}>Create An Account</Text></Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop:100
  },
  sectionTitle: {
    fontSize: 39,
    fontWeight: '600',
    color: '#000000',
  },
  sectionLogin: {
    marginHorizontal: 20,
    // marginVertical: 50,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  textpassword: {
    fontWeight: '600',
    fontSize: 12,
    color: '#1F4C6B',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  register:{
    color:'black',
    textAlign:'center'
  },
  registertext2:{
    color:'blue',
  },
});
