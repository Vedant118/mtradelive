import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Button,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomTextinput from '../Comman/CustomTextinput/CustomTextinput';
import CustomBotton from '../Comman/CustomButton/CustomBotton';
import DropDownPicker from 'react-native-dropdown-picker';
import {Table, Row, Rows} from 'react-native-table-component';

const EPinRequest = () => {
  const [showEpinStorage, setShowEpinStorage] = useState(true);
  const [isEpinStorageSelected, setIsEpinStorageSelected] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [items, setItems] = useState([
    {label: 'P500000', value: 'P500000'},
    {label: 'P600000', value: 'P600000'},
    {label: 'P700000', value: 'P700000'},
  ]);
  const [items2, setItems2] = useState([
    {label: 'UPI', value: 'UPI'},
    {label: 'CASH', value: 'CASH'},
    {label: 'NEFT', value: 'NEFT'},
  ]);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleCountrySelection = gender => {
    setSelectedCountry(gender);
    toggleDropdown();
  };

  const toggleComponent = () => {
    setShowEpinStorage(!showEpinStorage);
    setIsEpinStorageSelected(!isEpinStorageSelected);
  };
  return (
    <View style={styles.Container}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{minHeight: '100%'}}
        alwaysBounceVertical={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.Section}>
          <View style={[styles.card, {marginTop: 20}]}>
            <Text style={styles.TextHeading}>E-pin Request</Text>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style={styles.textContainer}>
                <TouchableOpacity onPress={toggleComponent}>
                  <Text
                    style={[
                      styles.toggletext,
                      isEpinStorageSelected && styles.selectedText,
                    ]}>
                    E-Pin Storage
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleComponent}>
                  <Text
                    style={[
                      styles.toggletext,
                      !isEpinStorageSelected && styles.selectedText,
                    ]}>
                    Send E-Pin Request
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {showEpinStorage ? (
              <ScrollView
              horizontal={true}
              >
              <View
                style={{
                  marginTop: 20,
                }}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                  <Row
                    data={tableHead}
                    style={styles.head}
                    textStyle={styles.text}
                    width={110}
                    height={60}

                  />
                  <Rows data={tableData} textStyle={styles.text} width={110} height={60}/>
                </Table>
              </View>
              </ScrollView>
            ) : (
              <View style={styles.Container}>
                <ScrollView
                  style={styles.scrollView}
                  contentContainerStyle={styles.scrollContent}>
                  <View style={styles.section}>
                    <Text style={styles.textHeading}>Send E-Pin Request</Text>
                    <DropDownPicker
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                      placeholder={'Select Joining Package'}
                    />
                    <CustomTextinput placeholder={'Email *'} />
                    <DropDownPicker
                      open={open2}
                      value={value2}
                      items={items2}
                      setOpen={setOpen2}
                      setValue={setValue2}
                      setItems={setItems2}
                      placeholder={'Payment Mode'}
                    />
                    <CustomTextinput placeholder={'Password *'} />

                    <View style={styles.buttonContainer}>
                      <CustomBotton title={'Submit'} />
                    </View>
                  </View>
                </ScrollView>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EPinRequest;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  Section: {
    marginHorizontal: 20,
    marginVertical: 50,
    // borderRadius: 5,
    // paddingHorizontal: 10,
    paddingVertical: 30,
  },
  card: {
    backgroundColor: 'white',
    elevation: 2,
    padding: 10,
  },
  TextHeading: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    marginVertical: 10,
    marginStart: 20,
  },
  heading: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    marginStart: 20,
  },
  input: {
    color: 'black',
    textAlign: 'center',
  },
  toggletext: {
    color: 'black',
    textDecorationLine: 'underline',
    fontSize: 17,
    textDecorationColor: 'red',
  },
  textContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  toggletext: {
    color: 'black',
    fontSize: 17,
    textDecorationLine: 'none',
  },
  selectedText: {
    textDecorationLine: 'underline',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    minHeight: '100%',
  },
  section: {
    // marginHorizontal: 20,
    marginVertical: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  textHeading: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginBottom:20
  },
  dropdownButton: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  dropdownButtonText: {
    fontWeight: '300',
  },
  dropdown: {
    elevation: 5,
    marginTop: 20,
    height: 300,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  dropdownItem: {
    width: '85%',
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#8e8e8e',
  },
  dropdownItemText: {
    fontWeight: '400',
  },
  buttonContainer: {
    marginTop: 30,
  },
  head: { backgroundColor: '#f1f8ff'},
  text: {margin: 6, color: 'black'},
});

const tableHead = [
  'S.No',
  'E-Pin from Package',
  'Quantity',
  'AmountPaid',
  'RequestOn',
  'Payment Mode',
  'UTR No',
  'Status',
];
const tableData = [
  ['1', 'P10000', '3', '10000', 'InvalidDate', 'UPI' , '133845463453','CANCELLED'],
  ['2', 'P10000', '3', '10000', 'InvalidDate', 'UPI' , '133845463453','CANCELLED'],
  ['3', 'P10000', '3', '10000', 'InvalidDate', 'UPI' , '133845463453','CANCELLED'],
  ['4', 'P10000', '3', '10000', 'InvalidDate', 'UPI' , '133845463453','CANCELLED'],
  ['5', 'P10000', '3', '10000', 'InvalidDate', 'UPI' , '133845463453','CANCELLED'],
  ['6', 'P10000', '3', '10000', 'InvalidDate', 'UPI' , '133845463453','CANCELLED'],
];