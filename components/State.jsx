import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const State = () => {
 const [name, setName] = useState("Hafeez")
 let testName = () => {
    setName("Khan")
 }

  return (
    <View>
        <Text style={{fontSize: 20}}>{name}</Text>
        <Button title='Update Name' onPress={testName}/>

    </View>
  );
};

export default State;
