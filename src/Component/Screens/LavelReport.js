import React from 'react';
import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';
import Users from '../images/Users.svg';

const LavelReport = () => {
  const Total = [
    {Lavel: '1', Total: '6'},
    {Lavel: '2', Total: '11'},
    {Lavel: '3', Total: '23'},
    {Lavel: '4', Total: '66'},
    {Lavel: '5', Total: '120'},
    {Lavel: '6', Total: '200'},
    {Lavel: '7', Total: '234'},
    {Lavel: '8', Total: '250'},
    {Lavel: '9', Total: '289'},
    {Lavel: '10', Total: '358'},
  ];
  return (
    <View style={styles.Container}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{height: '100%'}}
        alwaysBounceVertical={false}>
        <View style={styles.Section}>
          <View style={styles.card}>
            <Text style={styles.TextHeading}>Level Report</Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.TextHad}>MT001</Text>
              <Text style={styles.TextDetail}>Admin</Text>
              <Text style={styles.TextDetail}>Direct Sponsor: 6</Text>
            </View>
          </View>

          <View style={styles.cards}>
            <Text style={styles.TextHeading}>Level and Total Downline</Text>
            <View style={styles.header}>
              <Text style={styles.heading}>Level</Text>
              <Text style={styles.heading}>Total Downline</Text>
            </View>

            <FlatList
              data={Total}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <View style={styles.Row}>
                      <Text style={styles.Textdetail}>{item.Lavel}</Text>
                      <Text style={styles.Textdetail}>{item.Total}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LavelReport;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Section: {
    // marginHorizontal: 20,
    marginVertical: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    elevation: 2,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cards: {
    backgroundColor: '#FFFFFF',
    elevation: 2,
    marginVertical: 60,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  TextHeading: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    marginVertical: 30,
    marginHorizontal: 10,
  },
  TextHad: {
    fontSize: 18,
    fontWeight: '400',
    color:'black',
    marginTop: 30,
  },
  TextDetail: {
    fontSize: 15,
    fontWeight: '400',
    color:'black',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },

  heading: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',

    flex: 1,
  },
  Textdetail: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000000',
    flex: 1,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 1,
    marginVertical: 8,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
});
