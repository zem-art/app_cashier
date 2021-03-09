import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import {styles} from '../styles/styleProfilM';
import LogOut from './logOut';

export class DataProfile extends Component {
  Attention() {
    Alert.alert('Maaf Layanan Belum Tersedia');
  }
  render() {
    return (
      <View style={styles.inBodyBottom}>
        <TouchableOpacity
          onPress={() => this.Attention()}
          style={styles.pactinBottom}>
          <Image
            style={styles.iconCircle}
            source={require('../assets/icon/iconProfile.png')}
          />
          <Text>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.Attention()}
          style={styles.pactinBottom}>
          <Image
            style={styles.iconCircle}
            source={require('../assets/icon/helpCenter.png')}
          />
          <Text>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.Attention()}
          style={styles.pactinBottom}>
          <Image
            style={styles.iconCircle}
            source={require('../assets/icon/Start3.png')}
          />
          <Text>Rating App</Text>
        </TouchableOpacity>
        <LogOut navigation={this.props.navigation} />
      </View>
    );
  }
}

export default DataProfile;
