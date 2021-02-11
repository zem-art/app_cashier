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

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      mata: true,
      email: '',
      password: '',
      isloading: false,
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
          const {id} = result.data.user;
          const {is_verified} = result.data.user;
          const {kode_member} = result.data.user;
          const {nama} = result.data.user;
          const {nomor} = result.data.user;
          const {qr_code} = result.data.user;
          const {role_id} = result.data.user;
          const {token} = result.data;
          this.props.userId(id);
          this.props.userVerifed(is_verified);
          this.props.kodeUser(kode_member);
          this.props.nameUser(nama);
          this.props.numberUser(nomor);
          this.props.userQrcode(qr_code);
          this.props.userRole(role_id);
          this.props.userToken(token);
          console.log('Ini Role==', result.data.user);
          if (
            token !== null ||
            role_id !== null ||
            kode_member !== null ||
            nama !== null ||
            id !== null ||
            nomor !== null ||
            qr_code !== null ||
            is_verified !== null
          ) {
            const token_Key = ['token', token];
            const role_Key = ['role', JSON.stringify(role_id)];
            const qr_Key = ['qr_code', qr_code];
            const nomor_Key = ['nomor', nomor];
            const name_Key = ['nama', nama];
            const kode_Key = ['kodeMember', kode_member];
            const id_Key = ['id', JSON.stringify(id)];
            const verifed_Key = ['verifid', is_verified];
            console.log('Sedang Menyimpan');
            AsyncStorage.multiSet([
              token_Key,
              role_Key,
              name_Key,
              qr_Key,
              nomor_Key,
              kode_Key,
              id_Key,
              verifed_Key,
            ]).then((value) => {
              this.setState({
                token_Key: value,
                role_Key: value,
                qr_Key: value,
                nomor_Key: value,
                name_Key: value,
                kode_Key: value,
                id_Key: value,
                verifed_Key: value,
              });
              console.log('Save Done');
            });
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
    // console.log('INi DAta Redux', this.props.userData.userReducer);
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
          </View>
          <View style={styles.Bootom}>
            <TouchableOpacity style={styles.inBottom}>
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
    userId: (id) => dispatch({type: 'SET_ID', payload: id}),
    userVerifed: (verifed) => dispatch({type: 'SET_VERIVIC', payload: verifed}),
    kodeUser: (kode) => dispatch({type: 'SET_KODE', payload: kode}),
    nameUser: (name) => dispatch({type: 'SET_NAME', payload: name}),
    numberUser: (data) => dispatch({type: 'SET_NUMBER', payload: data}),
    userQrcode: (qr) => dispatch({type: 'SET_QRCODE', payload: qr}),
    userRole: (role) => dispatch({type: 'SET_ROLE', payload: role}),
    userSaldo: (saldo) => dispatch({type: 'SET_SALDO', payload: saldo}),
    userToken: (token) => dispatch({type: 'SET_USER', payload: token}),
    emailUser: (email) => dispatch({type: 'EMAIL_USER', payload: email}),
  };
};
export default connect(null, mapDispatchToProps)(Login);
