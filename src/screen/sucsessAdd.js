import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class SucsessAdd extends Component {
  render() {
    console.log('Ini Data Params==', this.props.route.params);
    return (
      <View>
        <Text> INi BAgian Sucsess </Text>
      </View>
    );
  }
}

export default SucsessAdd;
