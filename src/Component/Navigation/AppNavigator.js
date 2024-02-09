import React, {useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
// import Profile from '../Screens/Profile';
import CustomHeader from '../Comman/CustomHeader';
import SigninScreen from '../Screens/SigninScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import withdrawFundScreen from '../Screens/WithdrawFundScreen';
import PendingPaymentScreen from '../Screens/PendingPaymentScreen';
import DrawerNavigator from './DrawerNavigator';
import WithdrawFundScreen from '../Screens/WithdrawFundScreen';
import InactiveScreen from '../Screens/InactiveScreen';
import PaidPaymentScreen from '../Screens/PaidPaymentScreen';
import DirectSponser from '../Screens/DirectSponser';
import LavelReport from '../Screens/LavelReport';
import LevelGenealogy from '../Screens/LevelGenealogy';
import Dashboard from '../Screens/Dashboard';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SideMenu from 'react-native-side-menu-updated';
import AddUserScreen from '../Screens/AddUserScreen';
import LavelTreeView from '../Screens/LavelTreeView';
import {Grid} from '../images';
import TotalEarningsScreen from '../Screens/TotalEarningsScreen';
import MyEpinScreen from '../Screens/MyEpinScreen';
import EPinRequest from '../Screens/E-PinRequestScreen';

export const AddUser = ({onClose}) => {
  const navigation = useNavigation();

  const navigateToScreen = screenName => {
    navigation.navigate(screenName);
    onClose();
  };

  return (
    <View
      style={{
        marginVertical: 15,
      }}>
      <Text style={styles.title}>MANAGE ACCOUNT</Text>
      <TouchableOpacity
        onPress={() => {
          navigateToScreen('AddUserScreen');
          onClose();
        }}>
        <Text style={styles.menuItem}>Add User</Text>
      </TouchableOpacity>
    </View>
  );
};

export const AdditionalComponentForLeader = ({onClose}) => {
  const navigation = useNavigation();

  const navigateToScreen = screenName => {
    navigation.navigate(screenName);
    onClose();
  };
  return (
    <View
      style={{
        marginVertical: 15,
      }}>
      <Text style={styles.title}>GENEALOGY</Text>
      <TouchableOpacity
        onPress={() => {
          navigateToScreen('LavelTreeView');
          onClose();
        }}>
        <Text style={styles.menuItem}>Level Tree View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigateToScreen('LevelGenealogy');
          onClose();
        }}>
        <Text style={styles.menuItem}>Level Genealogy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigateToScreen('InactiveScreen');
          onClose();
        }}>
        <Text style={styles.menuItem}>Inactive Downline</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigateToScreen('LavelReport');
          onClose();
        }}>
        <Text style={styles.menuItem}>Level Report</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigateToScreen('DirectSponser');
          onClose();
        }}>
        <Text style={styles.menuItem}>Direct Sponser</Text>
      </TouchableOpacity>
    </View>
  );
};

const Menu = ({onClose, userRole}) => {
  const navigation = useNavigation();

  const navigateToScreen = screenName => {
    navigation.navigate(screenName);
    onClose();
  };
  return (
    <ScrollView style={styles.menu}>
      <View style={styles.logo}>
        <Image
          source={require('../images/logo.png')}
          style={{width: 70, height: 85}}
        />
      </View>
      <View
        style={{
          marginVertical: 15,
        }}>
        <Text style={styles.title}>MENU</Text>
        <TouchableOpacity
          onPress={() => {
            navigateToScreen('Dashboard');
            onClose();
          }}>
          <Text style={styles.menuItem}>Dashboard</Text>
        </TouchableOpacity>
      </View>
      {userRole === 'Leader' && <AddUser onClose={onClose} />}
      <View
        style={{
          marginVertical: 15,
        }}>
        <Text style={styles.title}>MANAGE E-PIN</Text>
        <TouchableOpacity
          onPress={() => {
            navigateToScreen('MyEpinScreen');
            onClose();
          }}>
          <Text style={styles.menuItem}>My Epins</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigateToScreen('EPinRequest');
            onClose();
          }}>
          <Text style={styles.menuItem}>E-Epin Request</Text>
        </TouchableOpacity>
      </View>
      {userRole === 'Leader' && (
        <AdditionalComponentForLeader onClose={onClose} />
      )}
      <View
        style={{
          marginVertical: 15,
        }}>
        <Text style={styles.title}>EARNINGS AND PAYMENTS</Text>
        <TouchableOpacity
          onPress={() => {
            navigateToScreen('TotalEarningsScreen');
            onClose();
          }}>
          <Text style={styles.menuItem}>My Earninigs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigateToScreen('WithdrawFundScreen');
            onClose();
          }}>
          <Text style={styles.menuItem}>Withdraw Fund</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigateToScreen('PendingPaymentScreen');
            onClose();
          }}>
          <Text style={styles.menuItem}>Pending Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigateToScreen('PaidPaymentScreen');
            onClose();
          }}>
          <Text style={styles.menuItem}>Paid Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const Stack = createNativeStackNavigator();

const AppNavigator = ({navigation}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [userRole, setUserRole] = useState('Investor');

  const switchRole = () => {
    setUserRole(userRole === 'Leader' ? 'Investor' : 'Leader');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <NavigationContainer>
      <SideMenu
        menu={
          <Menu
            navigation={navigation}
            onClose={closeMenu}
            userRole={userRole}
          />
        }
        isOpen={isOpen}
        onChange={isOpen => setIsOpen(isOpen)}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name={'Login'}
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'ForgotPasswordScreen'}
            component={ForgotPasswordScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Dashboard'}
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'AddUserScreen'}
            component={AddUserScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'LavelTreeView'}
            component={LavelTreeView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'LevelGenealogy'}
            component={LevelGenealogy}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'InactiveScreen'}
            component={InactiveScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'LavelReport'}
            component={LavelReport}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'DirectSponser'}
            component={DirectSponser}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'TotalEarningsScreen'}
            component={TotalEarningsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'WithdrawFundScreen'}
            component={WithdrawFundScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'PendingPaymentScreen'}
            component={PendingPaymentScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'PaidPaymentScreen'}
            component={PaidPaymentScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'MyEpinScreen'}
            component={MyEpinScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'EPinRequest'}
            component={EPinRequest}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <View style={styles.navigation}>
          <TouchableOpacity style={styles.button} onPress={toggleMenu}>
            <Image
              source={require('../images/hamburger.png')}
              style={styles.menuicon}
            />
          </TouchableOpacity>
          <View style={styles.usercontainer}>
            {/* <View
          style={styles.buttoncontainer}
          >
            <Text
            style={{
              textAlign:'center',
              color:'white'
            }}
            >Switch To Leader</Text>
          </View> */}
            <TouchableOpacity
              style={styles.buttoncontainer}
              onPress={switchRole}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                Switch To {userRole === 'Leader' ? 'Investor' : 'Leader'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userimgcontainer}>
              <Image
                source={require('../images/User.jpg')}
                style={styles.userimg}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SideMenu>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  navigation: {
    position: 'absolute',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'white',
  },
  button: {},
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  menu: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'black',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  title: {
    color: 'grey',
    fontSize: 15,
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  menuicon: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
  },
  userimgcontainer: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 50,
  },
  userimg: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  usercontainer: {
    flexDirection: 'row',
    gap: 8,
  },
  buttoncontainer: {
    paddingHorizontal: 10,
    backgroundColor: 'lightblue',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
