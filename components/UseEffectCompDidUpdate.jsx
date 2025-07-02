import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectCompDidUpdate = () => {
const [count, setCount] = useState(0);
const [data, setData] = useState(100);

useEffect(() => {
    console.log(count)
}, [count]);

  return (
    <View>
      <Text style={{fontSize: 20}}>{data}UseEffect is Component Did Update{count}</Text>
      <Button title="Update Counter" onPress={() => setCount(count + 1)} />
      <Button title="Update Data" onPress={() => setData(data + 1)} />
    </View>
  )
}

export default UseEffectCompDidUpdate
