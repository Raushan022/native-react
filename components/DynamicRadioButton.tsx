import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DynamicRadioButton = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);

  const skills = [
    {
      id: 1,
      name: 'HTML',
    },
    {
      id: 2,
      name: 'CSS',
    },
    {
      id: 3,
      name: 'JAVASCRIPT',
    },
    {
      id: 4,
      name: 'REACTJS',
    },
    {
      id: 5,
      name: 'PYTHOn',
    },
  ];

  return (
    <View style={styles.main}>
      {skills.map(option => (
        <TouchableOpacity
          key={option.id}
          onPress={() => setSelectedRadio(option.id)}
        >
          <View style={styles.radioWrapper}>
            <View style={styles.radioOne}>
              {selectedRadio === option.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <View>
              <Text style={styles.radioOneText}>{option.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
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

export default DynamicRadioButton;
