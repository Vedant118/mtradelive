import React, { useState } from 'react';
import {View, StyleSheet, ScrollView, Text, FlatList, TouchableOpacity, TextInput, Button} from 'react-native';
import CustomShortBotton from '../Comman/CustomButton/CustomShortButton';
import {Table, Row, Rows} from 'react-native-table-component';
import CustomBotton from '../Comman/CustomButton/CustomBotton';

const InactiveScreen = () => {
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
        style={{flex: 1}}
        contentContainerStyle={{minHeight: '100%'}}
        alwaysBounceVertical={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.TextHeading}>Direct Sponsor</Text>
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
                    width={100}
                    height={40}
                  />
                  <Rows data={tableData} textStyle={styles.text} width={100} height={60}/>
                </Table>
              </View>
              </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InactiveScreen;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  section: {
    marginVertical: 50,
    borderRadius: 5,
    paddingHorizontal: 5,
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
  },
  ListContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
  },

  heading: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',

    flex: 1,
  },
  Textdetail: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    flex: 1,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 1,
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 6,
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
  head: {height: 40, backgroundColor: '#f1f8ff'},
text: {margin: 6, color: 'black'},
});
const tableHead = [
  'SR.No',
  'ID',
  'Name',
  'Level',
  'Join Date',
  'Top-up Date',
  'Top-up Amount',
  'Sponsor',
  'Sponsor Name',
];
const tableData = [
  ['1', '1', 'John Doe', 'Beginner', '12/12/23', '12/12/23' , '12000','HDFC',<CustomBotton title={'View Tree'}/>],
  ['1', '1', 'John Doe', 'Beginner', '12/12/23', '12/12/23' , '12000','HDFC',<CustomBotton title={'View Tree'}/>],
  ['1', '1', 'John Doe', 'Beginner', '12/12/23', '12/12/23' , '12000','HDFC',<CustomBotton title={'View Tree'}/>],
  ['1', '1', 'John Doe', 'Beginner', '12/12/23', '12/12/23' , '12000','HDFC',<CustomBotton title={'View Tree'}/>],
];