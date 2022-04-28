import React from 'react';
import { StyleSheet, View } from 'react-native';

const BorderBottom = () => {
  return <View style={styles.borderBottom} />;
};

export default BorderBottom;

const styles = StyleSheet.create({
  borderBottom: {
    backgroundColor: '#fff',
    height: 0.2,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 5
  }
});
