import React from 'react';
import { StyleSheet, View } from 'react-native';
import BronzeCup from '../svg/BronzeCup';
import GoldCup from '../svg/GoldCup';
import SilverCup from '../svg/SilverCup';

const UserCup = ({ index }) => {
  if (index === 0) {
    return (
      <View style={styles.cup}>
        <GoldCup />
      </View>
    );
  }

  if (index === 1) {
    return (
      <View style={styles.cup}>
        <SilverCup />
      </View>
    );
  }

  if (index === 2) {
    return (
      <View style={styles.cup}>
        <BronzeCup />
      </View>
    );
  }

  return null;
};

export default UserCup;

const styles = StyleSheet.create({
  cup: {
    marginLeft: 'auto'
  }
});
