import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from '../styles/styleSuccessM';

export class SaldoAdd extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#318fff" />
        <View style={styles.header}>
          <Text style={styles.title}>Terimkasih Sudah</Text>
          <Text style={styles.title}>Melakukan Top Up Saldo</Text>
        </View>
        <View style={styles.pactImage}>
          <View style={styles.inIcon}>
            <Image
              style={styles.icon}
              source={require('../assets/img/Succses.png')}
            />
          </View>
        </View>
        <View style={styles.Bottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.inBottom}>
            <Text style={styles.textBottom}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SaldoAdd;
