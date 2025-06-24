import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
    const resetFormData = () => {
        setDisplay(false);
        setName('');
        setEmail('');
        setPassword('')
    }
  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>
        Simple Form in React Native
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <View style={{ marginBottom: 10 }}>
        <Button title="Print Details" onPress={() => setDisplay(true)} />
      </View>

      <Button title="Clear Details" onPress={resetFormData}/>
      <View>
        {display ? (
          <View>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>
              Name: {name}
            </Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>
              Email: {email}
            </Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>
              Password: {password}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 5,
  },
});

export default Form;
