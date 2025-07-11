import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'


const Welcome = () => {
  const [name, setName] = useState ("Hafeez")
  return (
    <View>
      <Text style={{fontSize:20, fontStyle:'italic'}}>Props in React Native</Text>
      <Button title='Update Props' onPress={() => setName('Khan')}/>
      <User name={name} age={24}/>
    </View>
  )
}

let User = (props) => {
  // console.log(props.name);
  return (
    <View>
      <Text>Name: {props.name}</Text>
      <Text>Age:  {props.age}</Text>
    </View>
  )
}

export default Welcome