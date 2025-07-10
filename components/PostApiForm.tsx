import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const PostApiForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const saveData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, email: email, age: age }),
    });
    result = (await result).json();
    if (result) {
      console.log(result);
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>post api with input field data</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        value={age}
        onChangeText={text => setAge(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Button title="SAVE DATA" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    margin: 20,
    padding: 4,
    fontSize: 20,
  },
});

export default PostApiForm;
