import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import CustomBotton from '../Comman/CustomButton/CustomBotton';
import { Users } from '../images';

const LavelTreeView = () => {
  return (
    <View style={styles.Container}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{minHeight: '100%'}}
        alwaysBounceVertical={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.Section}>
          <View style={{flexDirection:'column'}}>
            <View style={styles.card}>
              <View style={{alignItems: 'center'}}>
                {/* <Users width={30} height={30} /> */}
                <View style={{marginVertical: 8}}>
                  <CustomBotton title={'   MT001  '} />
                </View>
                <Text style={[styles.TextDetail, {marginTop: 10}]}>Admin</Text>
                <Text style={styles.TextDetail}>Direct Sponsor: 6</Text>
                <Text style={styles.TextDetail}>Total Downline: 1031</Text>
              </View>
            </View>
            <View style={styles.cards}>
              <Text style={styles.TextHad}>Level Lists</Text>
              <Text style={styles.TextLavel}>Level 1</Text>
              <Text style={styles.TextLavel}>Level 2</Text>
              <Text style={styles.TextLavel}>Level 3</Text>
              <Text style={styles.TextLavel}>Level 4</Text>
              <Text style={styles.TextLavel}>Level 5</Text>
              <Text style={styles.TextLavel}>Level 6</Text>
              <Text style={styles.TextLavel}>Level 7</Text>
              <Text style={styles.TextLavel}>Level 8</Text>
              <Text style={styles.TextLavel}>Level 9</Text>
              <Text style={styles.TextLavel}>Level 10</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LavelTreeView;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    flex: 1,
  },
  Section: {
    // marginHorizontal: 20,
    marginVertical: 50,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  card: {
    backgroundColor: 'white',
    elevation: 2,
    padding: 40,
  },
  cards: {
    backgroundColor: 'white',
    elevation: 2,
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginTop:20
  },
  TextHad: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  TextDetail: {
    fontSize: 15,
    fontWeight: '400',
    color:'black'
  },
  TextLavel: {
    marginTop: 20,
    fontSize: 16,
    color:'black'
  },
});
