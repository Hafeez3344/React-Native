import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ActivityIndicator,Button
} from 'react-native';
import React from 'react';

const TouchAbleBtn = () => {
  const [show, setShow] = React.useState(false);
const displayLoader = () => {
  setShow(true);
}
setTimeout(() => {
  setShow(false);
}, 6000);

  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Touchable Button</Text>
      </TouchableHighlight>{' '}
      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}>Touchable Button</Text>
      </TouchableHighlight>{' '}
      <TouchableHighlight>
        <Text style={[styles.button, styles.danger]}>Touchable Button</Text>
      </TouchableHighlight>{' '}
      <TouchableHighlight>
        <Text style={[styles.button]}>Touchable Button</Text>
      </TouchableHighlight>
      <View>
        <ActivityIndicator size={200} animating={show} />
        <Button title="Show Loader" onPress={displayLoader} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  button: {
    backgroundColor: '#4CAF50', // Green
    color: 'white',
    fontSize: 20,
    padding: 10,
    margin: 10,
    textAlign: 'center',
    borderRadius: 5,
    elevation: 10,
    shadowOpacity: 1,
  },

  success: { backgroundColor: 'green' },
  primary: { backgroundColor: 'blue' },
  warning: { backgroundColor: 'yellow' },
  danger: { backgroundColor: 'red' },
});
export default TouchAbleBtn;
