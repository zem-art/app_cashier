import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  ToastAndroid,
} from 'react-native';
import {stylesB} from '../styles/stylesHomeB';
import {connect} from 'react-redux';
import BodyHomeB from '../components/BodyHomeB';
import AsyncStorage from '@react-native-community/async-storage';

export class HomeBos extends Component {
  clearData = async () => {
    try {
      console.log('==Sedang Menghapus Data==');
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      this.props.userToken(null);
      this.props.userVerifed(null);
      console.log('==Berhasil Menghapus==');
    } catch (err) {
      console.log('===Eroro Tidak Bisa Menghapus Data==', err);
    }
  };
  Exit = () => {
    return Alert.alert(
      'Confirm Log Out',
      'Apakah Anda Mau Keluar',
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
    return (
      <View style={stylesB.container}>
        <StatusBar backgroundColor="#F9C900" />
        <View style={stylesB.header1}>
          <Text style={stylesB.title}> Dashboard </Text>
          <TouchableOpacity onPress={() => this.Exit()}>
            <Image
              style={stylesB.exit}
              source={require('../assets/icon/exit.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesB.body}>
          <BodyHomeB navigation={this.props.navigation} />
        </View>
      </View>
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
    userToken: (token) => dispatch({type: 'SET_USER', payload: token}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeBos);
