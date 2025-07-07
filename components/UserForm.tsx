import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    if (firstName && password) {
      setSubmittedData({ firstName, password });
      setFirstName('');
      setPassword('');
    }
  };

  const handleReset = () => {
    setFirstName('');
    setPassword('');
    setSubmittedData(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Form</Text>
      <TextInput
        placeholder="First Name"
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Submit Details" color="green" onPress={handleSubmit} />
        </View>
        <View style={styles.button}>
          <Button title="Reset" color="red" onPress={handleReset} />
        </View>
      </View>

      {submittedData && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Submitted Details:</Text>
          <Text>First Name: {submittedData.firstName}</Text>
          <Text>Password: {submittedData.password}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  result: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  resultText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default UserForm;
