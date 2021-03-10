import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import Spinner from 'react-native-spinkit';
import {styles} from '../../styles/styleLogin';
import AsyncStorage from '@react-native-community/async-storage';
import Checkbox from '@react-native-community/checkbox';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      mata: true,
      email: '',
      password: '',
      isloading: false,
      box: false,
    };
  }
  changeEye = () => {
    const eyes = !this.state.mata;
    this.setState({mata: eyes});
  };

  userLogin = async () => {
    this.setState({isloading: true});
    try {
      axios
        .post('https://project-mini.herokuapp.com/api/login', {
          email: this.state.email,
          password: this.state.password,
        })
        .then((result) => {
          const {is_verified} = result.data.data;
          const {role_id} = result.data.data;
          const {token} = result.data;
          this.props.userRole(role_id);
          this.props.userToken(token);
          this.props.userVerifed(is_verified);
          if (token !== null || role_id !== null || is_verified !== null) {
            const token_Key = ['token', token];
            const role_Key = ['role', JSON.stringify(role_id)];
            const verifed_Key = ['verifid', is_verified];
            this.state.box // Fitur Remember Me
              ? AsyncStorage.multiSet([token_Key, role_Key, verifed_Key]).then(
                  (value) => {
                    this.setState({
                      token_Key: value,
                      role_Key: value,
                      verifed_Key: value,
                    });
                  },
                  console.log('==Data Tersimpan=='),
                )
              : console.log('==Data Tidak Tersimpan===');
            ToastAndroid.show('Anda Berhasil Login', ToastAndroid.LONG);
            this.setState({
              isloading: false,
            });
          }
        })
        .catch((err) => {
          ToastAndroid.show('Email Atau Password Salah', ToastAndroid.LONG);
          console.log('Erororo', err);
          this.setState({
            isloading: false,
          });
        });
    } catch (err) {
      this.setState({isloading: false});
      if (err.response) {
        ToastAndroid.show(
          'Maaf Terjadi Kesalahan Dari Kami',
          ToastAndroid.LONG,
        );
        console.log('Erororr ', err.response.data);
      }
    }
  };
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
                onChangeText={(email) => {
                  this.setState({
                    email: email,
                  });
                }}
              />
            </View>
            <Text>Password :</Text>
            <View style={styles.inAccount}>
              <Image
                style={styles.pass}
                source={require('../../assets/icon/pass.png')}
              />
              <TextInput
                secureTextEntry={this.state.mata}
                style={styles.input}
                placeholder="Enter Your Password"
                onChangeText={(password) =>
                  this.setState({
                    password: password,
                  })
                }
              />
              <TouchableOpacity
                onPress={() => this.changeEye()}
                style={styles.pathEye}>
                <Image
                  style={styles.eye}
                  source={
                    this.state.mata
                      ? require('../../assets/icon/hidenEye.png')
                      : require('../../assets/icon/openEyes.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={styles.checkBox}>
              <Checkbox
                value={this.state.box}
                onValueChange={() => this.setState({box: !this.state.box})}
              />
              <Text style={styles.text}>Ingatkan Saya</Text>
            </View>
          </View>
          <View style={styles.Bootom}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Forgot')}
              style={styles.inBottom}>
              <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.userLogin()}
              style={styles.inBottom1}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'white'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.textLogin}>Sign In</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.Register}>
            <Text>You don 't have an account ? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.textRegister}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userVerifed: (is_verified) =>
      dispatch({type: 'SET_VERIVIC', payload: is_verified}),
    userRole: (role_id) => dispatch({type: 'SET_ROLE', payload: role_id}),
    userToken: (token) => dispatch({type: 'SET_USER', payload: token}),
  };
};
export default connect(null, mapDispatchToProps)(Login);
