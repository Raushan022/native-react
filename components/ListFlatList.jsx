import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const userData = [
  { id: 1, name: 'Amit' },
  { id: 2, name: 'Ravi' },
  { id: 3, name: 'Sneha' },
  { id: 4, name: 'Vikas' },
  { id: 5, name: 'Priya' },
  { id: 6, name: 'Rahul' },
  { id: 7, name: 'Neha' },
  { id: 8, name: 'Karan' },
  { id: 9, name: 'Pooja' },
  { id: 10, name: 'Deepak' },
  { id: 11, name: 'Anjali' },
  { id: 12, name: 'Suresh' },
  { id: 13, name: 'Divya' },
  { id: 14, name: 'Manish' },
  { id: 15, name: 'Ritika' },
  { id: 16, name: 'Arjun' },
  { id: 17, name: 'Komal' },
  { id: 18, name: 'Sanjay' },
  { id: 19, name: 'Meena' },
  { id: 20, name: 'Varun' },
];

const ListFlatList = () => {
  return (
    <View>
      <Text>Names Listssss</Text>
      <FlatList
        data={userData}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: '#fff',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
});

export default ListFlatList;
