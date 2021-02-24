import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styleProfile';

export class ProfileAdmin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text> Profile </Text>
          <TouchableOpacity>
            <Image
              style={styles.submit}
              source={require('../assets/icon/edit.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
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
            <TouchableOpacity style={styles.iinBody}>
              <Image
                style={styles.iconCircle}
                source={require('../assets/icon/logOuth.png')}
              />
              <Text>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ProfileAdmin;
