import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import { Download, Dropup } from '../images';
import CustomBotton from '../Comman/CustomButton/CustomBotton';
import CustomTextinput from '../Comman/CustomTextinput/CustomTextinput';

const genders = [{ Gender: 'Male' }, { Gender: 'Female' }];

const AddUserScreen = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleCountrySelection = (gender) => {
    setSelectedCountry(gender);
    toggleDropdown();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.textHeading}>Add User Form</Text>

          <CustomTextinput placeholder={'Full Name *'} />
          <CustomTextinput placeholder={'Email *'} />
          <CustomTextinput placeholder={'Phone *'} />
          <CustomTextinput placeholder={'Password *'} />
          <CustomTextinput placeholder={'Sponsor id *'} />

          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={toggleDropdown}
          >
            <Text style={styles.dropdownButtonText}>
              {selectedCountry === '' ? 'Select Gender' : selectedCountry}
            </Text>
            {/* {isDropdownVisible ? (
              <Dropup width={30} height={30}/>
            ) : (
              <Download width={30} height={30}/>
            )} */}
          </TouchableOpacity>

          {isDropdownVisible && (
            <View style={styles.dropdown}>
              <FlatList
                data={genders}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => handleCountrySelection(item.Gender)}
                  >
                    <Text style={styles.dropdownItemText}>{item.Gender}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}

          <CustomTextinput placeholder={'Referral id *'} />
          <TouchableOpacity onPress={() => AlertHandler()}>
            <Text style={{ fontSize: 16 }}>Click to copy</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <CustomBotton title={'Submit'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    minHeight: '100%',
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  textHeading: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
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
});

export default AddUserScreen;
