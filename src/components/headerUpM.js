import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from '../styles/styleHomeM';

export class HeaderUpM extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={styles.icon}
          source={require('../assets/img/iHeader.png')}
        />
        <Text style={styles.title}>What'd You Like Todo ?</Text>
      </View>
    );
  }
}

export default HeaderUpM;
