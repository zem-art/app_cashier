import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styleHomeK';

export class BodyHomeK extends Component {
  render() {
    return (
      <>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('TopUp')}
          style={styles.inBody}>
          <Image
            style={styles.icon}
            source={require('../assets/icon/sald.png')}
          />
          <Text>Top Up Saldo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddCart')}
          style={styles.inBody}>
          <Image
            style={styles.icon}
            source={require('../assets/icon/addCart.png')}
          />
          <Text>Add Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ScanTopUp')}
          style={styles.inBody}>
          <Image
            style={styles.icon}
            source={require('../assets/icon/scan.png')}
          />
          <Text>Scan Top Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inBody}>
          <Image
            style={styles.icon}
            source={require('../assets/icon/getCart.png')}
          />
          <Text>My Cart</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default BodyHomeK;
