import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styleHomeK';

export class HeaderUpK extends Component {
  render() {
    return (
      <>
        <Text style={styles.Title}>Dashboard</Text>
        <TouchableOpacity>
          <Image
            style={styles.iconTitle}
            source={require('../assets/icon/cart.png')}
          />
        </TouchableOpacity>
      </>
    );
  }
}

export default HeaderUpK;
