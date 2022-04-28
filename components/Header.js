import React from 'react';
import { StyleSheet, View } from 'react-native';
import BackButton from './header/BackButton';
import BorderBottom from './header/BorderBottom';
import HeaderText from './header/HeaderText';

const Header = () => {
  return (
    <View>
      <View style={styles.container}>
        <BackButton />
        <HeaderText />
      </View>
      <BorderBottom />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15
  }
});
