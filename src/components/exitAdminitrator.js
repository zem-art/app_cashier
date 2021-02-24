import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles/styleProfile';
import Exit from './Exit';

export class ExitAdminitrator extends Component {
  render() {
    return (
      <View style={styles.inBody}>
        <TouchableOpacity style={styles.iinBody}>
          <Image
            style={styles.iconCircle}
            source={require('../assets/icon/iconProfile.png')}
          />
          <Text>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iinBody}>
          <Image
            style={styles.iconCircle}
            source={require('../assets/icon/Start3.png')}
          />
          <Text>Rating App</Text>
        </TouchableOpacity>
        <Exit navigation={this.props.navigation} />
      </View>
    );
  }
}

export default ExitAdminitrator;
