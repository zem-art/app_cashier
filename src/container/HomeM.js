import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import BottomHeaderM from '../components/BottomHeaderM';
import HeaderUpM from '../components/headerUpM';
import {styles} from '../styles/styleHomeM';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import {connect} from 'react-redux';
import Body from '../components/bodyHome';
import AsyncStorage from '@react-native-community/async-storage';

class HomeM extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isloading: true,
      isEror: false,
      refreash: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getData();
  }

  getData = async () => {
    try {
      await axios
        .get('https://project-mini.herokuapp.com/api/get-member', {
          headers: {
            Authorization: `Bearer${this.props.userData.userReducer.token}`,
          },
        })
        .then((result) => {
          const {kode_member} = result.data.data;
          const {nama} = result.data.data;
          const {nomor} = result.data.data;
          const {qr_code} = result.data.data;
          this.props.numberUser(nomor);
          this.props.kodeUser(kode_member);
          this.props.nameUser(nama);
          this.props.userQrcode(qr_code);
          // console.log('Berhasil Get ==', result.data.data);
          this.setState({
            data: result.data.data,
            isloading: false,
            refreash: false,
          });
          const qr_Key = ['qr_code', qr_code];
          const nomor_Key = ['nomor', nomor];
          const name_Key = ['nama', nama];
          const kode_Key = ['kodeMember', kode_member];
          AsyncStorage.multiSet([name_Key, qr_Key, nomor_Key, kode_Key]).then(
            (value) => {
              this.setState({
                token_Key: value,
                role_Key: value,
                verifed_Key: value,
              });
              console.log('++++===SAVE DONE===++++');
            },
          );
        })
        .catch((err) => {
          console.log('Eroro Get Data===', err);
          this.setState({isloading: false, isEror: true, refreash: false});
        });
    } catch (err) {
      console.log('Erroro Get Data==', err);
      this.setState({isloading: false, isEror: true, refreash: false});
    }
  };

  render() {
    if (this.state.isloading) {
      return (
        <View style={styles.Loading1}>
          <Spinner color={'blue'} size={40} type="ThreeBounce" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    } else if (this.state.isEror) {
      return (
        <View style={styles.Loading1}>
          <Text>Maaf Terjadi Eror Saat Memuat Data</Text>
          <Text>Dan Kesalahan Dari Kami Bukan Dari Anda</Text>
          <TouchableOpacity
            style={styles.toc}
            onPress={() => this.onRefreash()}>
            <Text>Klik Me Untuk refreash</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreash}
              onRefresh={() => this.onRefreash()}
            />
          }>
          <HeaderUpM navigation={this.props.navigation} />
          <BottomHeaderM navigation={this.props.navigation} />
          <View style={styles.pactHistory}>
            <Text style={styles.text}>History</Text>
            <TouchableOpacity style={styles.Seeklik}>
              <Text style={styles.see}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <Body navigation={this.props.navigation} />
          </View>
        </ScrollView>
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
    kodeUser: (kode_member) =>
      dispatch({type: 'SET_KODE', payload: kode_member}),
    nameUser: (nama) => dispatch({type: 'SET_NAME', payload: nama}),
    numberUser: (nomor) => dispatch({type: 'SET_NUMBER', payload: nomor}),
    userQrcode: (qr_code) => dispatch({type: 'SET_QRCODE', payload: qr_code}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeM);
