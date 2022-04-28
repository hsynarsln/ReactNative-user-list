import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ArrowIcon from '../svg/ArrowIcon';

const BackButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.imgContainer}>
        <ArrowIcon />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  imgContainer: {
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 15
  }
});
