import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../styles/styleSucssesA';
import LottieView from 'lottie-react-native';

export class CheckOut extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      date: item.created_at,
      nameKasir: item.kasir_id,
      moneyChanges: item.kembalian,
      pay: item.harga_total,
      kode: item.kode_member,
      cash: item.type,
      moneyCash: item.dibayar,
    };
  }
  render() {
    console.log('ini Data ==', this.props.route.params);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <Text style={styles.title}>Transaksi Cash Berhasil</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inbody}>
            <LottieView
              source={require('../assets/animation/Sucsse.json')}
              style={styles.icon}
              autoPlay
              loop
            />
          </View>
        </View>
        <ScrollView>
          <View style={styles.bottom}>
            <View style={styles.StartBottom}>
              <View>
                <Text>Nama Kasir:</Text>
                <Text>{this.state.nameKasir}</Text>
              </View>
            </View>
            <View style={styles.inBottom}>
              <Text>Uang Cash :</Text>
              <View style={styles.pactRp}>
                <Text>Rp . </Text>
                <Text>{this.state.moneyCash} </Text>
              </View>
            </View>
            <View style={styles.inBottom}>
              <Text>Kembalian :</Text>
              <View style={styles.pactRp}>
                <Text>Rp .</Text>
                <Text> {this.state.moneyChanges}</Text>
              </View>
            </View>
            <View style={styles.inBottom}>
              <Text>Date :</Text>
              <Text>{this.state.date} </Text>
            </View>
          </View>
          <View style={styles.pactKlik}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Cashier')}
              style={styles.inKlik2}>
              <Text style={styles.text}>Done</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default CheckOut;
