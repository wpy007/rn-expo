import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';

class Keyboard extends Component {
  constructor () {
    super();

    this.resetTitle = this.resetTitle.bind(this);

  }

  componentWillMount () {
    setTimeout(this.resetTitle, 3000);

  }
  static navigationOptions = {
    title: 'Input',
  }

  resetTitle () {
    console.log('this.props xxx', this.props.navigation);
    this.props.navigation.setParams({
      otherParam: 'update Tab'
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>this is Keyboard page</Text>
        <Button
          title="点击nav前进Input"
            onPress={() => {
              console.log('here', this.props.navigation);
              this.props.navigation.navigate('Input');
          }} />
          <Button
          title="点击push前进Input"
            onPress={() => {
              console.log('here', this.props.navigation);
              this.props.navigation.push('Input');
          }} />
        <Button
          title="点击后退goBack"
            onPress={() => {
              console.log('here');
              this.props.navigation.goBack();
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  content: {
    fontSize: 30,
    alignItems: 'center',
  },
});

export default Keyboard;