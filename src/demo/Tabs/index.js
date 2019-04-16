import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import RNPage from '../../../components/RNPage';

import Tabs from '../../components/Tabs';

class TabsDemo extends RNPage {
  constructor () {
    super();

  }

  componentWillMount () {

  }
  static navigationOptions = {
    title: 'Tabs demo',
  }


  render () {
    return (
      <View style={styles.container}>
        <Tabs />
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

export default TabsDemo;