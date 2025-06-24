import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Style = () => {
  return (
    <View>
      <Text style={{fontSize: 30, color:"red", backgroundColor:"green"}}>Style in React Native</Text>
      <Text style={styles.textBox}>Style in React Native</Text>
      <Text style={styles.textBox}>Style in React Native</Text>
    </View>
  )
}

const styles=StyleSheet.create({
textBox: {
    color: 'blue',
    backgroundColor: 'pink',
    fontSize: 20,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
}
})

export default Style