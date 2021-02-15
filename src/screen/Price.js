import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from '../styles/stylePrice';
import LottieView from 'lottie-react-native';

export class Price extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      nameBank: item.bank,
      price: item.jumlah,
      id: item.order_id,
      date: item.transaction_date,
      status: item.transaction_status,
      noTransaksi: item.va_numbers,
    };
  }

  goTO() {
    this.props.navigation.navigate('SuccsesAdd');
  }
  render() {
    // console.log('Ini Data Params', this.props.route.params);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <View style={styles.header}>
          <Text style={styles.Title}>Pengisian Saldo</Text>
        </View>
        <View style={styles.pactIcon}>
          <LottieView
            source={require('../assets/animation/done.json')}
            style={styles.icon}
            autoPlay
            loop
          />
        </View>
        <View style={styles.body}>
          <View style={styles.data}>
            <Text>No ID Bank</Text>
            <Text>{this.state.id}</Text>
          </View>
          <View style={styles.data}>
            <Text>Name Bank</Text>
            <Text>{this.state.nameBank}</Text>
          </View>
          <View style={styles.data}>
            <Text>Date Transaction</Text>
            <Text>{this.state.date}</Text>
          </View>
          <View style={styles.data}>
            <Text>Status</Text>
            <Text style={styles.textPending}>{this.state.status}</Text>
          </View>
          <View style={styles.data}>
            <Text>Price Transaction</Text>
            <Text>Rp . {this.state.price}</Text>
          </View>
          <View style={styles.data}>
            <Text>Kode ID</Text>
            <Text style={styles.textPending}>{this.state.noTransaksi}</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => this.goTO()} style={styles.klik}>
            <Text style={styles.Title}>OK</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textSaldo}>
          Salin Kode ID Untuk Konfirmasi Pembayaran
        </Text>
      </View>
    );
  }
}

export default Price;
