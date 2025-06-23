import React from 'react';
import {View, Text, Button } from 'react-native';
import CompanyData from './components/CompanyData';
import ButtonAndOnPress from './components/ButtonAndOnPress';

function App() {

  let name = "Hafeez"
  let age = 25;

  return (
    <View>
      {/* <CompanyData/> */}
      <ButtonAndOnPress/>

    </View>
  );
}





export default App;
