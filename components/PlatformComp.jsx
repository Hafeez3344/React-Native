import { View, Platform, StyleSheet, Text } from 'react-native';
import React from 'react';

const PlatformComp = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Platform: {Platform.OS}</Text>
      {Platform.OS === 'android' ? (
        <View
          style={{ backgroundColor: 'green', height: 100, width: 100 }}
        ></View>
      ) : (
        <View
          style={{ backgroundColor: 'red', height: 100, width: 100 }}
        ></View>
      )}
      <Text style={styles.text}>Hello</Text>
      <Text> {JSON.stringify(Platform)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Platform.OS === 'ios' ? 'orange' : 'blue',
    fontSize: 20,
  },
});

export default PlatformComp;
