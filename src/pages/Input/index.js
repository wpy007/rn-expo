import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';

class Input extends Component {
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
        <Text style={styles.content}>this is Input page</Text>
        <Button
          title="点击push前进"
            onPress={() => {
              console.log('here', this.props.navigation);
              this.props.navigation.push('Tabs');
          }} />
          <Button
          title="点击nav前进"
            onPress={() => {
              console.log('here', this.props.navigation);
              this.props.navigation.navigate('Tabs');
          }} />
        <Button
          title="点击后退"
            onPress={() => {
              console.log('here');
              this.props.navigation.goBack();
          }} />
          <Button
          title="点击后退"
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
    backgroundColor: 'cyan',
  },
  content: {
    fontSize: 30,
    alignItems: 'center',
  },
});

export default Input;