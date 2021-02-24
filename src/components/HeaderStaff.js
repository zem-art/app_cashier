import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles/styleHomestaf';

export class HomeStaff extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
      </View>
    );
  }
}

export default HomeStaff;
