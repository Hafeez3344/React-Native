import { View, Text, Button } from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {
    const [user, setUser] = useState('');
    const setData = async () => {
        await AsyncStorage.setItem('user', 'Hafeez');
    };

    const getData = async () => {
        const name = await AsyncStorage.getItem('user');
        setUser(name);
    };
    
    const removeData = async () => {
        await AsyncStorage.removeItem('user');
        setUser('');
    };
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
        AsyncStorage | {user ? user : 'No User Data'}
      </Text>
      <View style={{ marginVertical: 20, padding: 10 }}>
        <Button title="Set Data" onPress={setData} />
      </View>
      <View style={{ marginVertical: 20, padding: 10 }}>
        <Button title="Get Data" onPress={getData} />
      </View>
        <View style={{ marginVertical: 20, padding: 10 }}>
        <Button title="Remove Data" onPress={removeData} />
      </View>
    </View>
  );
};

export default AsyncStorageExample;
