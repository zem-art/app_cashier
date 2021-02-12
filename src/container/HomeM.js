import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles/styleHomeM';

export class HomeM extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text> Ini Bagian Home</Text>
        </View>
        <View>
          <Text>Body</Text>
        </View>
      </View>
    );
  }
}

export default HomeM;
