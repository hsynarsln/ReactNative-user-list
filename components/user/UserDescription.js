import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UserDescription = ({ fullName, location }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.name}>{fullName.toLowerCase().substring(0, 10)}</Text>
      <Text style={styles.location}>{location.country}</Text>
    </View>
  );
};

export default UserDescription;

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 15
  },
  name: {
    fontSize: 18,
    fontWeight: '600'
  },
  location: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666'
  }
});
