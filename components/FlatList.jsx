import { View, Text } from 'react-native'
import React from 'react'

const FlatList = () => {
    let data = [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' },
        { id: '3', name: 'Item 3' },
        { id: '4', name: 'Item 4' },
        { id: '5', name: 'Item 5' }
    ];
  return (
    <View>
      <Text>
        { 
        data.map((item)=> <Text> {item.name} </Text>)
        }
        
        </Text>
    </View>
  )
}

export default FlatList