import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../../styles/styleLogin';

export class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#4f52ffff" />
        <View style={styles.header}>
          <Text style={styles.textLogin}>Sign In</Text>
        </View>
        <View style={styles.pactImage}>
          <Image
            style={styles.icon}
            source={require('../../assets/img/IconLogin.png')}
          />
        </View>
        <ScrollView>
          <View style={styles.pactAccount}>
            <Text>Email Or No Phone :</Text>
            <View style={styles.inAccount}>
              <Image
                style={styles.pass}
                source={require('../../assets/icon/mail.png')}
              />
              <TextInput
                style={styles.input}
                placeholder="Email Or Phone Number"
              />
            </View>
            <Text>Password :</Text>
            <View style={styles.inAccount}>
              <Image
                style={styles.pass}
                source={require('../../assets/icon/pass.png')}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter Your Password"
              />
            </View>
          </View>
          <View style={styles.Bootom}>
            <TouchableOpacity style={styles.inBottom}>
              <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inBottom1}>
              <Text style={styles.textLogin}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Register}>
            <Text>You don 't have an account ? </Text>
            <TouchableOpacity
            // onPress={() => this.props.navigation.navigate('Register')}
            >
              <Text style={styles.textRegister}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Login;
