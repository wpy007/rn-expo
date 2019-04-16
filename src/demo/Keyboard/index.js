import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import RNPage from '../../../components/RNPage';

class KeyboardDemo extends RNPage {
  constructor (props) {
    super(props);

  }

  static navigationOptions = {
    title: 'Keyboard demo',
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>this is tabs page</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    fontSize: 30,
    alignItems: 'center',
  },
});

export default KeyboardDemo;