import React from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import BgPattern from './user/BgPattern';
import Degree from './user/Degree';
import UserCup from './user/UserCup';
import UserDescription from './user/UserDescription';
import UserImg from './user/UserImg';

const User = ({ item, index }) => {
  const { picture, name, location, email, phone } = item;
  const fullName = `${name.first}${name.last}`;

  const showUserDetails = () => {
    Alert.alert('User Details', `${fullName} lives in ${location.city} \nEmail: ${email} \nPhone: ${phone}`, [{ text: 'OK', onPress: () => console.log('OK Pressed') }], { cancelable: true });
  };

  return (
    <TouchableOpacity style={[styles.row, index < 3 ? styles.boxShadow : styles.border, index === 0 && styles.gold, index === 1 && styles.silver, index === 2 && styles.bronze]} onPress={showUserDetails}>
      <BgPattern index={index} />
      <Degree index={index} />
      <UserImg picture={picture} index={index} />
      <UserDescription fullName={fullName} location={location} />
      <UserCup index={index} />
    </TouchableOpacity>
  );
};

export default User;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 3,
    borderRadius: 15
  },
  border: {
    borderColor: '#e6e6e6',
    borderWidth: 3
  },
  boxShadow: {
    backgroundColor: '#fff',
    color: '#000',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 7
  },
  gold: {
    backgroundColor: '#FEEBC3'
  },
  bronze: {
    backgroundColor: '#F8F5F5'
  }
});
