import React from 'react';
import { View, Text, Button, ScrollView, SafeAreaView,Image } from 'react-native';
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
import SearchWithApi from './components/SearchWithApi';
import UseRef from './components/UseRef';
import AsyncStorage from './components/AsyncStorage';
import Product from './components/Product';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();


function App() {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Home" component={Product} />
                <stack.Screen name="User" component={Welcome} />
            </stack.Navigator>
        </NavigationContainer>
        
    );
}

  // return (
  //       <View>
  //         {/* <CompanyData />
  //         <ButtonAndOnPress />
  //         <Welcome />
  //         <State />
  //         <Style />
  //         <TextChange />
  //         <Form />
  //         <FlatList />
  //         <UseEffectCompDidUpdate />
  //         <ResponsiveFlex/>
  //         <TouchAbleBtn/>
  //         <PlatformComp/>
  //         <NewWebView/> */}
  //         {/* <NativeNavigation/> */}
  //         {/* <ApiCall/> */}
  //         {/* <MapApiData/> */}
  //         {/* <SearchWithApi /> */}
  //         {/* <UseRef/> */}
  //         {/* <AsyncStorage/> */}
  //          
  //           <Product/>
  //       </View>
  // );
// }





export default App;
