import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, {useState} from 'react';

const TextChange = () => {
   
    const [name, setName] = useState("");

  return (
    <View>
      <Text style={{ fontSize: 20 }}>Handle Text input in React</Text>
      <Text style={{fontSize: 20}}>Your Name is : {name}</Text>
      <TextInput style={styles.textInput}  placeholder='Enter Your name here' value={name} onChangeText={(text) => setName(text)}/>
        <Button title='Clear Input Value' onPress={()=> setName('')}/>
    </View>
  );
};

let styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#f0f0f0'
  }
})

export default TextChange;
