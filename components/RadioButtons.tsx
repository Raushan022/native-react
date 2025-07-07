import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RadioButtons = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radioOne}>
            {selectedRadio === 1 ? <View style={styles.radioBg}></View> : null}
          </View>
          <View>
            <Text style={styles.radioOneText}>Radio1</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedRadio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radioOne}>
            {selectedRadio === 2 ? <View style={styles.radioBg}></View> : null}
          </View>
          <View>
            <Text style={styles.radioOneText}>Radio2</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOne: {
    width: 30,
    height: 30,
    borderBlockColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    margin: 6,
  },
  radioBg: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
    margin: 3,
  },
  radioOneText: {
    fontSize: 20,
  },
});

export default RadioButtons;
