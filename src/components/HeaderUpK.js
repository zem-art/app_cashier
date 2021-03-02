import React, {Component} from 'react';
import {Text} from 'react-native';
import {styles} from '../styles/styleHomeK';

export class HeaderUpK extends Component {
  render() {
    return (
      <>
        <Text style={styles.Title}>Dashboard</Text>
      </>
    );
  }
}

export default HeaderUpK;
