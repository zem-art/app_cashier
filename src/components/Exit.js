import React, {Component} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styleProfile';

export class Exit extends Component {
  render() {
    return (
      <>
        <TouchableOpacity style={styles.iinBody}>
          <Image
            style={styles.iconCircle}
            source={require('../assets/icon/logOuth.png')}
          />
          <Text>Log Out</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default Exit;
