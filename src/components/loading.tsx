import View from '@src/components/common/view';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <>
      <View backgroundColor='primary' style={styles.container}>
        <ActivityIndicator size='small' color='black' />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Loading;
