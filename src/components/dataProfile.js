import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles/styleProfilM';

export class DataProfile extends Component {
  render() {
    return (
      <View style={styles.inBodyBottom}>
        <TouchableOpacity style={styles.pactinBottom}>
          <Image
            style={styles.iconCircle}
            source={require('../assets/icon/iconProfile.png')}
          />
          <Text>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pactinBottom}>
          <Image
            style={styles.iconCircle}
            source={require('../assets/icon/helpCenter.png')}
          />
          <Text>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pactinBottom}>
          <Image
            style={styles.iconCircle}
            source={require('../assets/icon/Start3.png')}
          />
          <Text>Rating App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pactinBottom}>
          <Image
            style={styles.iconCircle}
            source={require('../assets/icon/logOuth.png')}
          />
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DataProfile;
