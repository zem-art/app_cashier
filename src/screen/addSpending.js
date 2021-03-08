import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleAddSaldo';
import axios from 'axios';
import {connect} from 'react-redux';

import Spinner from 'react-native-spinkit';

export class AddSpending extends Component {
  constructor() {
    super();
    this.state = {
      price: '',
      isloading: false,
      name: '',
    };
  }

  lead_To() {
    this.props.navigation.navigate('Dashboard');
  }

  addMoney() {
    this.setState({isloading: true});
    console.log('Mulai Mengirim');
    axios({
      url: 'https://project-mini.herokuapp.com/api/add-pengeluaran',
      method: 'POST',
      data: {
        nama_pengeluaran: this.state.name,
        jumlah: this.state.price,
      },

      headers: {
        Authorization: `Bearer ${this.props.userData.userReducer.token}`,
      },
    })
      .then((result) => {
        console.log('Berhasil Menambahkan Pengeluaran==', result.data.data);
        this.lead_To();
        ToastAndroid.show(
          'Berhasil Menambahkan Pengeluaran',
          ToastAndroid.LONG,
        );
      })
      .catch((err) => {
        console.log('Errr', err);
        this.setState({isloading: false});
        ToastAndroid.show('Gagal', ToastAndroid.LONG);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header1}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.backUp}
              source={require('../assets/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Tambah Pengeluaran</Text>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.inbody1}>
              <View style={styles.pact}>
                <Text style={styles.text}>Nama Pengeluaran</Text>
                <TextInput
                  onChangeText={(nama) => this.setState({name: nama})}
                  style={styles.input1}
                  placeholder="Nama Pengeluaran"
                  multiline
                />
              </View>
              <View style={styles.pactNominal}>
                <Text>Rp .</Text>
                <TextInput
                  onChangeText={(price) => this.setState({price: price})}
                  style={styles.input}
                  keyboardType="number-pad"
                  placeholder="Nominal"
                />
              </View>
            </View>
          </View>
          <View style={styles.pacTouchable}>
            <TouchableOpacity
              onPress={() => this.addMoney()}
              style={styles.klik1}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'white'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.textSend}>Tambah Laporan</Text>
              )}
            </TouchableOpacity>
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

export default connect(mapStateToProps)(AddSpending);
