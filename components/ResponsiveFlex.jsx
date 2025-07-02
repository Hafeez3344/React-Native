import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const ResponsiveFlex = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'red' }]}>
        <Text style={styles.text}>Flex 1</Text>
      </View>
      <View style={[styles.box, { backgroundColor: 'green' }]}>
        <Text style={styles.text}>Flex 2</Text>
      </View>
      <View style={[styles.box, { backgroundColor: 'blue' }]}>
        <Text style={styles.text}>Flex 3</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // ensures the whole screen is used
  },
  box: {
    flex: 1,
    justifyContent: 'center', // centers text vertically
    alignItems: 'center',     // centers text horizontally
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default ResponsiveFlex;
