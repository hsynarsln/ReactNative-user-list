import React from 'react';
import { StyleSheet, View } from 'react-native';
import BgSvgGold from '../svg/BgSvgGold';
import BgSvgSilver from '../svg/BgSvgSilver';

const BgPattern = ({ index }) => {
  return (
    <View style={styles.bgSvg}>
      {index === 0 && <BgSvgGold />}
      {(index === 1 || index === 2) && <BgSvgSilver />}
    </View>
  );
};

export default BgPattern;

const styles = StyleSheet.create({
  bgSvg: {
    position: 'absolute',
    top: 0,
    left: 0
  }
});
