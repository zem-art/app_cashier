import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from 'react-native';
import {styles} from '../styles/styleAll';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import {connect} from 'react-redux';

export class LossReport extends Component {
  constructor() {
    super();
    this.state = {
      bank: {},
      isloading: false,
      inputDate: '',
    };
  }

  lead_To() {
    this.props.navigation.navigate('Month', {item: this.state.bank});
  }

  GetMonth() {
    this.setState({isloading: true});
    console.log('Mulai Mengirim');
    axios({
      url: 'https://project-mini.herokuapp.com/api/laporan/laba-rugi',
      method: 'POST',
      data: {
        bulan: this.state.inputDate,
      },
      headers: {
        Authorization: `Bearer ${this.props.userData.userReducer.token}`,
      },
    })
      .then((result) => {
        console.log('Sucssess==', result.data);
        this.setState({bank: result.data.data, isloading: false});
        this.lead_To();
        ToastAndroid.show(
          'Permintaan Anda Berhasil Di Proses',
          ToastAndroid.LONG,
        );
      })
      .catch((err) => {
        console.log('Erro Add Saldo', err);
        this.setState({isloading: false});
        ToastAndroid.show(
          'Permintaan Anda Tidak Di Temukan',
          ToastAndroid.LONG,
        );
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../assets/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Laporan Kerugian</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inbody}>
            <Text style={styles.text}>Silahkan Pilih Bulan Anda</Text>
            <Picker
              mode="dropdown"
              selectedValue={this.state.inputDate}
              style={styles.Picker}
              onValueChange={(itemValue) => {
                this.setState({inputDate: itemValue});
              }}>
              <Picker.item label="Pilih Bulan" value="0" />
              <Picker.item label="Januari" value="1" />
              <Picker.item label="February" value="2" />
              <Picker.item label="March" value="3" />
              <Picker.item label="April" value="4" />
              <Picker.item label="May" value="5" />
              <Picker.item label="June" value="6" />
              <Picker.item label="July" value="7" />
              <Picker.item label="August" value="8" />
              <Picker.item label="September" value="9" />
              <Picker.item label="Oktober" value="10" />
              <Picker.item label="November" value="11" />
              <Picker.item label="December" value="12" />
            </Picker>
          </View>
        </View>
        <View style={styles.pacTouchable}>
          <TouchableOpacity onPress={() => this.GetMonth()} style={styles.klik}>
            {this.state.isloading ? (
              <Spinner
                style={styles.loading}
                color={'white'}
                size={25}
                type="Wave"
              />
            ) : (
              <Text style={styles.textSend}>Done</Text>
            )}
          </TouchableOpacity>
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
export default connect(mapStateToProps)(LossReport);
