import React, { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, loadMoreUsers } from '../slices/userSlice';
import User from './User';

const UserList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const { users, loading, page, moreloading } = useSelector(state => state.users);

  const loadMore = () => {
    if (users.length < 81) {
      dispatch(loadMoreUsers(page + 1));
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getUsers());
    setRefreshing(false);
  };

  return <FlatList data={users} keyExtractor={(item, index) => index.toString()} style={styles.list} renderItem={({ item, index }) => <User item={item} index={index} />} onEndReached={loadMore} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} />;
};

export default UserList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 10
  }
});
