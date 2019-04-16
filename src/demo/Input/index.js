import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import RNPage from '../../../components/RNPage';

class InputDemo extends RNPage {
  constructor () {
    super();

  }

  componentWillMount () {
  }

  static navigationOptions = {
    title: 'Input demo',
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>this is Input page</Text>
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

export default InputDemo;