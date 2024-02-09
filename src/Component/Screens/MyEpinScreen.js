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
import CustomShortinput from '../Comman/CustomTextinput/CustomShortinput';
import CustomShortBotton from '../Comman/CustomButton/CustomShortButton';
import DatePicker from 'react-native-date-picker';
import {Table, Row, Rows} from 'react-native-table-component';

const MyEpinScreen = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState(new Date());
  const [show, setShow] = useState(false);
  const [fromDate, setFromDate] = useState('From Date');
  const [toDate, setToDate] = useState('To Date');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fdate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setFromDate(fdate);
    setToDate(fdate);
    console.log(fdate);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <View style={styles.Container}>
      <ScrollView
        // horizontal={true}
        style={{flex: 1}}
        contentContainerStyle={{minHeight: '100%'}}
        alwaysBounceVertical={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.Section}>
          <View style={[styles.card, {marginTop: 20}]}>
            <Text style={styles.TextHeading}>My E-pin</Text>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style={styles.dateContainer}>
                <TouchableOpacity onPress={showMode} style={styles.datebox}>
                  <TextInput
                    style={styles.input}
                    placeholder="Select date"
                    value={fromDate}
                    editable={false}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={showMode} style={styles.datebox}>
                  <TextInput
                    style={styles.input}
                    placeholder="Select date"
                    value={toDate}
                    editable={false}
                  />
                </TouchableOpacity>
                <Button title="Search" />
              </View>

              {show && (
                <DatePicker
                  mode={'date'}
                  modal
                  open={show}
                  date={date}
                  onConfirm={date => {
                    setShow(false);
                    setDate(date);
                    onChange(null, date);
                  }}
                  onCancel={() => {
                    setShow(false);
                  }}
                />
              )}
            </View>
            <ScrollView horizontal={true}>
              <View
                style={{
                  marginTop: 20,
                }}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                  <Row
                    data={tableHead}
                    style={styles.head}
                    textStyle={styles.text}
                    width={100}
                    height={40}
                  />
                  <Rows
                    data={tableData}
                    textStyle={styles.text}
                    width={100}
                    height={40}
                  />
                </Table>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyEpinScreen;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  Section: {
    marginVertical: 50,
    paddingVertical: 30,
  },
  card: {
    backgroundColor: 'white',
    elevation: 2,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 15,
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
    marginHorizontal: 2,
  },
  input: {
    color: 'black',
    textAlign: 'center',
  },
  datebox: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    // paddingVertical:2
  },
  dateContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  head: { backgroundColor: '#f1f8ff'},
  text: {margin: 6, color: 'black'},
});

const tableHead = [
  'S.No',
  'Issued to-ID',
  'E-pin',
  'Leader',
  'Amount',
  'IssueDate',
  'Action',
];
const tableData = [
  ['1', 'MT001', '41W50X83',' ', '10000', 'InvalidDate', 'Approved'],
];
