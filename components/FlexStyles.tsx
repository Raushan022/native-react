import React from 'react';
import { StyleSheet, View } from 'react-native';

const FlexStyles = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.innerBox1}></View>
        <View style={styles.innerBox1}></View>
        <View style={styles.innerBox1}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  box2: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  box3: {
    flex: 1,
    backgroundColor: 'green',
  },
  innerBox1: {
    backgroundColor: 'blue',
    flex: 1,
    margin: 10,
  },
});

export default FlexStyles;
