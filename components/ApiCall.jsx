import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const ApiCall = () => {
    const [data, setData] = useState(undefined);

    const getAPIData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts/1';
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(() => {
        getAPIData();
    }, [])

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlignVertical: 'center', justifyContent: 'center' }}>ApiCall</Text>
      {
      data ? <View>
        <Text style={{ fontSize: 18, marginTop: 10 }}>Title: {data.id}</Text>
        <Text style={{ fontSize: 18, marginTop: 10 }}>User ID: {data.title}</Text>
        <Text style={{ fontSize: 18, marginTop: 10 }}>Body: {data.body}</Text>
        </View> : null
      }
    </View>
  )
}

export default ApiCall