import React, { Component } from 'react';

class RNPage extends Component {
  constructor (props) {
    super(props);
  }

  static navigationOptions = {
    title: 'none'
  }

  route = {
    // 如何不用箭头函数绑定this呢？
    push: (url) => {
      this.props.navigation && this.props.navigation.push(url);
    },

    navigate: (url) => {
      this.props.navigation && this.props.navigation.navigate(url);
    },

    pop: () => {
      this.props.navigation && this.props.navigation.pop();
    },

    goBack: () => {
      this.props.navigation && this.props.navigation.goBack();
    }
  };


}

export default RNPage;