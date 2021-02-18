import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles/styleHomeM';

class BottomHeaderM extends Component {
  render() {
    return (
      <View style={styles.bottomH}>
        <View style={styles.inBottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Qr Code')}
            style={styles.Klik}>
            <Image
              style={styles.scan}
              source={require('../assets/icon/qrcode.png')}
            />
            <Text>Qr Code</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inBottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddSaldo')}
            style={styles.Klik}>
            <Image
              style={styles.scan}
              source={require('../assets/icon/addMoney.png')}
            />
            <Text>Add Money</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default BottomHeaderM;
