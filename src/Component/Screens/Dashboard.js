import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { BarChart } from "react-native-gifted-charts";

const Dashboard = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {Data.map((item,index) => {
          return (
            <View style={styles.boxcontainer}>
              <Text style={styles.text1}>{item.title}</Text>
              <Text style={styles.text1}>₹ {item.amount}</Text>
            </View>
          );
        })}
        <View
        style={styles.chart}
        >
        <BarChart data = {data} barWidth={15} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 16,
  },
  boxcontainer: {
    elevation: 2,
    borderRadius: 8,
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    gap: 10,
    paddingHorizontal: 10,
    marginBottom:20
  },
  text1: {
    fontSize: 18,
    color: 'black',
  },
  chart:{
    marginTop:30
  },
});

const Data = [
  {
    id: '1',
    title: 'Todays Earnings',
    amount: '0',
  },
  {
    id: '2',
    title: 'Last 15 Days Earnings',
    amount: '0',
  },
  {
    id: '3',
    title: 'Last 15 Days Earnings',
    amount: '0',
  },
  {
    id: '4',
    title: 'All Time Earnings',
    amount: '40492.32',
  },
  {
    id: '5',
    title: 'Investor Amount',
    amount: '10000',
  },
];

const data=[ {value:50}, {value:80}, {value:90}, {value:70} ,{value:100} ,{value:110},{value:150},{value:170},{value:200} ]