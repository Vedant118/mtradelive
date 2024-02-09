import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Card from '../Comman/Card';
import CustomTextinput from '../Comman/CustomTextinput/CustomTextinput';
import Download from '../images/Download.svg';
import Dropup from '../images/Dropup.svg';
import CustomBotton from '../Comman/CustomButton/CustomBotton';
import CustomShortBotton from '../Comman/CustomButton/CustomShortButton';
import CustomShortinput from '../Comman/CustomTextinput/CustomShortinput';
import DropDownPicker from 'react-native-dropdown-picker';

const Datas = [{Withdraw: 'Bank'}, {Withdraw: 'Upi'}, {Withdraw: 'Case'}];

const WithdrawFundScreen = () => {
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(Datas);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('Withdrawal Type');
  const [items, setItems] = useState([
    {label: 'Bank', value: 'Bank'},
    {label: 'UPI', value: 'UPI'},
    {label: 'CASH', value: 'CASH'},
  ]);
  const searchRef = useRef();
  const onSearch = search => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item.country.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(Datas);
    }
  };
  return (
    <View style={styles.Container}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{minHeight: '100%'}}
        alwaysBounceVertical={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.Section}>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'space-between',
            }}>
            <Card title={'Last Withdraw'} money={'Last Withdraw: ₹ 0'} />
            <Card title={'Balance Amount'} money={'Balance: ₹ 38438.51'} />
          </View>

          <View
            style={{
              backgroundColor: 'white',
              elevation: 3,
              padding: 10,
              marginTop: 30,
            }}>
            <Text style={styles.title}>Withdrawal via Bank Transfer</Text>

            <CustomTextinput placeholder={'Amount'} />
            <DropDownPicker
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                      placeholder={'Withdrawal Type'}
                    />

            <View style={{marginTop: 20, marginHorizontal: 120}}>
              <CustomBotton title={'Submit'} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WithdrawFundScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  Section: {
    marginVertical: 50,
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    margin: 20,
  },
});
