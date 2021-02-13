import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles/styleHomeM';

class BottomHeaderM extends Component {
  render() {
    return (
      <View style={styles.bottomH}>
        <View style={styles.inBottom}>
          <TouchableOpacity style={styles.Klik}>
            <Image
              style={styles.scan}
              source={require('../assets/icon/scan.png')}
            />
            <Text>Scan</Text>
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
