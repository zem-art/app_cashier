import React, {Component} from 'react';
import {Text, TouchableOpacity, Image, Alert, ToastAndroid} from 'react-native';
import {styles} from '../styles/styleProfilM';
import axios from 'axios';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

export class LogOut extends Component {
  postLogout() {
    console.log('Mulai Mengirim Permintaan');
    axios
      .post('https://project-mini.herokuapp.com/api/logout', {
        headers: {
          Authorazation: `Bearer${this.props.userData.userReducer.token}`,
        },
      })
      .then((result) => {
        console.log('Berhasil Keluar==', result.data);
        ToastAndroid.show('Anda Berhasil Keluar', ToastAndroid.LONG);
        this.clearData();
        this.goTo();
      })
      .catch((err) => {
        console.log('Gagal  Data Tidak Terhapus', err);
      });
  }

  goTo() {
    this.props.navigation.navigate('Intro');
  }

  clearData = async () => {
    try {
      console.log('==Sedang Menghapus Data==');
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      this.props.userToken(null);
      this.props.userVerifed(null);
      this.props.userQrcode(null);
      this.props.kodeUser(null);
      this.props.nameUser(null);
      this.props.numberUser(null);
      console.log('==Berhasil Menghapus==');
    } catch (err) {
      console.log('===Eroro Tidak Bisa Menghapus Data==', err);
    }
  };

  Exit = () => {
    return Alert.alert(
      'Log Out',
      'Confirmation',
      [
        {
          text: 'Cancel',
          onPress: () => ToastAndroid.show('Cancel Log Out', ToastAndroid.LONG),
          style: 'cancel',
        },
        {text: 'Ok ', onPress: () => this.clearData()},
      ],
      {cancelable: false},
    );
  };

  render() {
    console.log('Data Token==', this.props.userData.userReducer.token);
    return (
      <>
        <TouchableOpacity
          onPress={() => this.Exit()}
          style={styles.pactinBottom}>
          <Image
            style={styles.iconCircle}
            source={require('../assets/icon/logOuth.png')}
          />
          <Text>Log Out</Text>
        </TouchableOpacity>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userVerifed: (verifed) => dispatch({type: 'SET_VERIVIC', payload: verifed}),
    kodeUser: (kode) => dispatch({type: 'SET_KODE', payload: kode}),
    nameUser: (name) => dispatch({type: 'SET_NAME', payload: name}),
    numberUser: (data) => dispatch({type: 'SET_NUMBER', payload: data}),
    userQrcode: (qr) => dispatch({type: 'SET_QRCODE', payload: qr}),
    userToken: (token) => dispatch({type: 'SET_USER', payload: token}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
