import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styleHomestaf';

export class HomeStaff extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <TouchableOpacity>
          <Image
            style={styles.iconHeader}
            source={require('../assets/icon/History.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeStaff;
