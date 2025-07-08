import React from 'react';
import { View, Text, Button, ScrollView, SafeAreaView } from 'react-native';
import CompanyData from './components/CompanyData';
import ButtonAndOnPress from './components/ButtonAndOnPress';
import Welcome from './components/Props';
import State from './components/State';
import Style from './components/Style';
import TextChange from './components/TextInput';
import Form from './components/Form';
import FlatList from './components/FlatList';
import UseEffectCompDidUpdate from './components/UseEffectCompDidUpdate';
import ResponsiveFlex from './components/ResponsiveFlex';
import TouchAbleBtn from './components/TouchAbleBtn';
import PlatformComp from './components/PlatformComp';
import NewWebView from './components/NewWebView';
import NativeNavigation from './components/NativeNavigation';
import ApiCall from './components/ApiCall';
import MapApiData from './components/MapApiData';

function App() {


  return (
        <View>
          {/* <CompanyData />
          <ButtonAndOnPress />
          <Welcome />
          <State />
          <Style />
          <TextChange />
          <Form />
          <FlatList />
          <UseEffectCompDidUpdate />
          <ResponsiveFlex/>
          <TouchAbleBtn/>
          <PlatformComp/>
          <NewWebView/> */}
          {/* <NativeNavigation/> */}
          {/* <ApiCall/> */}
          <MapApiData/>
        </View>
  );
}





export default App;
