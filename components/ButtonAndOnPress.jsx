import { Button, View, Text } from 'react-native'
import React from 'react'

export default function ButtonAndOnPress() {
    let clickCount = () => {
    console.log('Button clicked');
    alert('Button clicked');
    }
    let clickCount2 = (val) => {
    console.log('Button clicked 2');
    alert(val);
    }
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Button and OnPress Event</Text>
      <Button title='On Press' onPress={clickCount} />
      {/* If passing parameters, use an arrow function in onPress */}
<Button title='On Press 2' onPress={() => clickCount2("Hello")} />

    </View>
  )
}