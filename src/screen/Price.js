import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class Price extends Component {
  render() {
    console.log('Ini Data Params', this.props.route.params);
    return (
      <View>
        <Text> Ini Bagian Price</Text>
      </View>
    );
  }
}

export default Price;
