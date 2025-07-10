import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 24 , textAlign: "right", backgroundColor: 'grey', color: "white", paddingRight: 10}}>0</Text>
    </View>
  )
}

export default Header