import React from 'react'
import { View,Text,StyleSheet, FlatList, ScrollView } from 'react-native'
import {Table, Row, Rows} from 'react-native-table-component';

const Data = [
 
  
  {Time: 'Today', money :"₹ 0"},
  {Time: '15 Days', money :"₹ 0"},
  {Time: 'This Month', money :"₹ 0"},
  {Time: 'Balance', money :"₹ 38438.51"},


 
 
];
const TotalEarningsScreen = () => {
  return (
    <View style={styles.Container}>
      <ScrollView
      >

      
      <View style={styles.Section}>
      {/* <FlatList
            data={Data}
            renderItem={({item, index}) => {
              return (
                <View style={{flexDirection:"column", justifyContent:"space-around"}}>
                   
                  
          <View style={{alignItems:"center", flexDirection:"row"}}>
        
          <Text style={styles.heading}>{item.Time}</Text>
      </View>
      <View style={{alignItems:"center",flexDirection:"row"}}>
      <Text  style={styles.heading}>{item.money}</Text>
      </View>

</View>
                
               
                
               
              );
            }}
          />
      */}
      <View style={styles.card}>
      <Text style={styles.TextHeading}>Total Earnings</Text>

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

      <View  style={[styles.card,{marginTop:20}]}>
      <Text style={styles.TextHeading}>Earnings</Text>
      <ScrollView
              horizontal={true}
              >
              <View
                style={{
                  marginTop: 20,
                }}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                  <Row
                    data={tableHead2}
                    style={styles.head}
                    textStyle={styles.text}
                    width={100}
                    height={40}
                  />
                  <Rows data={tableData2} textStyle={styles.text} width={100} height={60}/>
                </Table>
              </View>
              </ScrollView>
      </View>
   
   
 
      </View>
      </ScrollView>
   </View>
  )
}

export default TotalEarningsScreen;
const styles = StyleSheet.create({
  Container: {

      backgroundColor:"#FFFFFF",
     height:"100%",
   
  },
  Section:{
    // marginHorizontal: 20,
    marginVertical: 50,
    borderRadius:5,
    paddingHorizontal:10,
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
  fontSize: 16,
  fontWeight: '400',
  color:"#000000",
  marginStart:20
},
head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6, color: 'black'},
})


const tableHead = [
  'Today',
  '15 Days',
  'This Month',
  'Balance',
];
const tableHead2 = [
  'ID',
  'Name',
  'Amount',
  'Admin Charge 5%',
  'Date of Payment',
  'Paid Amount',
  'Type of Income',
  'Level',
  'Level ID',
];
const tableData = [
  ['10000', '120000', '250000', '346547'],
];
const tableData2 = [
  ['1', 'John Doe', '25000', '1250','12/04/2023','12000','CASH','2','ID7564'],
  ['1', 'John Doe', '25000', '1250','12/04/2023','12000','CASH','2','ID7564'],
  ['1', 'John Doe', '25000', '1250','12/04/2023','12000','CASH','2','ID7564'],
];

