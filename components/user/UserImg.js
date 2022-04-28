import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const UserImg = ({ picture, index }) => {
  return (
    <View style={[styles.imgContainer, index < 3 && styles.orange]}>
      <Image source={{ uri: picture.thumbnail }} style={styles.image} />
    </View>
  );
};

export default UserImg;

const styles = StyleSheet.create({
  imgContainer: {
    marginLeft: 20,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#F8F5F5'
  },
  orange: {
    borderColor: '#F6BB4A',
    borderStyle: 'dotted'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50
  }
});
