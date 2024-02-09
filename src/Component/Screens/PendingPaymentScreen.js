import React from 'react'
import { View,Text,StyleSheet, FlatList, ScrollView } from 'react-native'
import CustomTextinput from '../Comman/CustomTextinput/CustomTextinput';
import CustomBotton from '../Comman/CustomButton/CustomBotton';
import CustomShortinput from '../Comman/CustomTextinput/CustomShortinput';
import CustomShortBotton from '../Comman/CustomButton/CustomShortButton';
import {Table, Row, Rows} from 'react-native-table-component';

const PendingPaymentScreen = () => {
  return (
    <View style={styles.Container}>
    <ScrollView
    style={{ flex: 1 }}
    contentContainerStyle={{ minHeight: "100%" }}
    alwaysBounceVertical={false}
    showsHorizontalScrollIndicator={false}
    >
 <View style={styles.Section}>
    <View  style={[styles.card,{marginTop:20}]}>
    <Text style={styles.TextHeading}>Pending Payment</Text>
    <View style={{flexDirection:"row",marginTop:20}}>
    <CustomShortinput placeholder={"ID"}/>
    <CustomShortBotton title={"Filter"}/>
    </View>
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
  )
}

export default PendingPaymentScreen;
const styles = StyleSheet.create({
  Container: {

      backgroundColor:"#FFFFFF",
     height:"100%",
   
  },
  Section:{
    // marginHorizontal: 20,
    marginVertical: 50,
    borderRadius:5,
    paddingHorizontal:15,
    paddingVertical: 30
  },
  card:{
    backgroundColor:"white",
    elevation:2,
    padding:10
    
  },
  TextHeading:{
    fontSize: 20,
    fontWeight: '400',
    color:"#000000",
    marginVertical:10,
    marginStart:20
},
heading:{
  fontSize: 14,
  fontWeight: '400',
  color:"#000000",
  marginStart:20
},
head: {height: 40, backgroundColor: '#f1f8ff'},
text: {margin: 6, color: 'black'},
})
const tableHead = [
  'ID',
  'Type',
  'Name',
  'Date',
  'Amount',
  'A/C No',
  'Bank',
  'IFSC',
  'Status',
];
const tableData = [
  ['1', 'Saving', 'John Doe', '12/12/23', 'InvalidDate', '564343' , '1339453242','IDBI000B1','PENDING'],
  ['1', 'Saving', 'John Doe', '12/12/23', 'InvalidDate', '564343' , '1339453242','IDBI000B1','PENDING'],
  ['1', 'Saving', 'John Doe', '12/12/23', 'InvalidDate', '564343' , '1339453242','IDBI000B1','PENDING'],
  ['1', 'Saving', 'John Doe', '12/12/23', 'InvalidDate', '564343' , '1339453242','IDBI000B1','PENDING'],
  ['1', 'Saving', 'John Doe', '12/12/23', 'InvalidDate', '564343' , '1339453242','IDBI000B1','PENDING'],
];