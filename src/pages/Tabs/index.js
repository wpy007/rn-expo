import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';

class Tabs extends Component {
  constructor () {
    super();

    this.resetTitle = this.resetTitle.bind(this);

  }

  componentWillMount () {
    setTimeout(this.resetTitle, 3000);

  }
  static navigationOptions = {
    title: 'Tab',
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
        <Text style={styles.content}>this is tabs page</Text>
        <Button
          title="点击nav前进"
            onPress={() => {
              console.log('here', this.props.navigation);
              this.props.navigation.navigate('Keyboard');
          }} />
          <Button
          title="点击push前进"
            onPress={() => {
              console.log('here', this.props.navigation);
              this.props.navigation.push('Keyboard');
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
    backgroundColor: 'pink',
  },
  content: {
    fontSize: 30,
    alignItems: 'center',
  },
});

export default Tabs;