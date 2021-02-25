import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleTopUp';
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export class TopUpScan extends Component {
  constructor() {
    super();
    const {item} = this.props.route.params;
    this.state = {
      kode: item,
      price: '',
      loading: false,
    };
  }

  topUpSaldo = async () => {
    this.setState({loading: true});
    await axios({
      url: 'https://project-mini.herokuapp.com/api/isi-saldo',
      data: {kode_member: this.state.kode, jumlah: this.state.price},
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
    })
      .then((result) => {
        console.log('Sucsses Top Up==', result.data);
        this.setState({loading: false});
        ToastAndroid.show('Top Up Berhasil', ToastAndroid.LONG);
      })
      .catch((err) => {
        console.log('Gagal Top Up==', err);
        this.setState({loading: false});
        ToastAndroid.show('Top Up Gagal', ToastAndroid.LONG);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.icon}
              source={require('../assets/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.Title}>Top Up</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.indata}>
            <Text style={styles.text}>Insert Kode Unix And Price</Text>
            <TextInput
              style={styles.input}
              value={this.state.kode}
              onChangeText={(kodeN) => this.setState({kode: kodeN})}
              placeholder="Kode Member"
            />
            <TextInput
              style={styles.input}
              onChangeText={(priceN) => this.setState({price: priceN})}
              placeholder="Jumlah"
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.klik}>
            {this.state.loading ? (
              <Spinner color={'white'} size={25} type="Wave" />
            ) : (
              <Text style={styles.textSend}>Top Up</Text>
            )}
          </View>
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
export default connect(mapStateToProps)(TopUpScan);
