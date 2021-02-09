import React, {Component} from 'react';
import {Text, View, Image, StatusBar, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styleIntro';

export class Intro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <View style={styles.header}>
          <Text style={styles.textTitle}>Welcome</Text>
          <Text style={styles.title}>Please login or sign</Text>
          <Text style={styles.title}>up to continue using our app</Text>
        </View>
        <View style={styles.body}>
          <Image
            style={styles.icon}
            source={require('../assets/img/14-removebg-preview.png')}
          />
        </View>
        <View style={styles.pactAccount}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.login}>
            <Image
              style={styles.iconLogin}
              source={require('../assets/icon/login1.png')}
            />
            <Text style={styles.textLogin}>Sign</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.register}>
            <Image
              style={styles.iconLogin}
              source={require('../assets/icon/signUP.png')}
            />
            <Text style={styles.textRegister}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pactForgot}>
          <Text>Forgot Password ?</Text>
          <TouchableOpacity>
            <Text style={styles.forgot}>Klik</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Intro;
