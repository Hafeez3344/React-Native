import { View, Text, TextInput, Button } from 'react-native'
import React, {useRef} from 'react'

const UseRef = () => {
    const input = useRef();

    let updateInput = () => {
        console.log("called");
        input.current.focus();
        input.current.setNativeProps({ fontSize: 20, color: 'blue'});
    }
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}   >UseRef</Text>
      <TextInput ref={input} style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, margin: 10, borderRadius: 5 }} placeholder='enter name'/>
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, margin: 10, borderRadius: 5 }} placeholder='enter password'/>
      <Button style={{ margin: 10}} title='Update Field' onPress={updateInput}/>
    </View>
  )
}

export default UseRef