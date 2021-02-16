import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from '../styles/styleSuccsesF';

export class Succes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#6495ed" />
        <View style={styles.header}>
          <Text style={styles.Title}>Mohon Cek SMS Anda Kami </Text>
          <Text style={styles.Title}>Sudah Mengirimkan</Text>
          <Text style={styles.Title}>Link Untuk Ubah Password</Text>
        </View>
        <View style={styles.body}>
          <Image
            style={styles.icon}
            source={require('../assets/img/sucsess.png')}
          />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Intro')}
            style={styles.inBottom}>
            <Text style={styles.Bottom}>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Succes;
