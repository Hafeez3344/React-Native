import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import CompanyData from './components/CompanyData';
import ButtonAndOnPress from './components/ButtonAndOnPress';
import Welcome from './components/Props';
import State from './components/State';
import Style from './components/Style';
import TextChange from './components/TextInput';
import Form from './components/Form';
import FlatList from './components/FlatList';

function App() {



  return (
    <ScrollView>
      <View>
        <CompanyData />
        <ButtonAndOnPress />
        <Welcome />
        <State />
        <Style />
        <TextChange />
        <Form />
        <FlatList/>
      </View>
    </ScrollView>
  );
}





export default App;
