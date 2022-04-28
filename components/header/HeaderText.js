import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderText = () => {
  return (
    <View>
      <Text style={styles.headerText}>Sıralama</Text>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    marginLeft: 100
  }
});
