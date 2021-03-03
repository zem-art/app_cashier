import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleAddBrand';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import {connect} from 'react-redux';

export class PaySaldo extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      kode: '',
      response: {},
      keranjang: [],
    };
  }

  goTo() {
    this.props.navigation.navigate('SucssesCart', {
      item: this.state.response,
      data: this.state.keranjang,
    });
  }

  paySaldo() {
    this.setState({loading: true});
    axios({
      url: 'https://project-mini.herokuapp.com/api/transaksi-member',
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
      data: {
        kode_member: this.state.kode,
      },
    })
      .then((result) => {
        console.log('Sucsses==', result.data);
        this.setState({
          loading: false,
          response: result.data.data,
          keranjang: result.data.keranjang,
        });
        ToastAndroid.show('Berhasil Melakukan Pembayaran', ToastAndroid.LONG);
        this.goTo();
      })
      .catch((err) => {
        console.log('Eroror Pay==', err);
        this.setState({loading: false});
        ToastAndroid.show('Gagal Melakukan Pembayaran', ToastAndroid.LONG);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#6495ed" />
        <View style={styles.header}>
          <Text style={styles.title}>Pay Saldo</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inBody}>
            <Text style={styles.text}>Enter Your Code Unix</Text>
            <TextInput
              style={styles.input}
              placeholder="0008274******"
              onChangeText={(name) => this.setState({kode: name})}
              keyboardType="number-pad"
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => this.paySaldo()} style={styles.klik}>
            {this.state.loading ? (
              <Spinner
                style={styles.loading}
                color={'#6495ed'}
                size={25}
                type="Wave"
              />
            ) : (
              <Text style={styles.textSend}>Add</Text>
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
export default connect(mapStateToProps)(PaySaldo);
