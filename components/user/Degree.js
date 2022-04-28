import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Degree = ({ index }) => {
  return (
    <View style={index < 3 ? styles.firstThree : styles.sortNumber}>
      <Text style={styles.sortNumberText}>{index + 1}</Text>
    </View>
  );
};

export default Degree;

const styles = StyleSheet.create({
  firstThree: {
    backgroundColor: '#F6BB4A',
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 50
  },
  sortNumber: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 50
  },
  sortNumberText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
