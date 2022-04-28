import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Loader from '../components/Loader';
import UserList from '../components/UserList';
import { getUsers } from '../slices/userSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading, moreLoading } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Header />
      {loading ? <Loader /> : <UserList />}
      {moreLoading && <Loader />}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 10
  }
});
