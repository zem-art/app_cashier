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

export class CheckOutS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      nameKasir: '',
      moneyChanges: '',
      pay: '',
      kode: '',
      cash: '',
    };
  }
  render() {
    console.log('ini Data ==', this.props.route.params);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <Text style={styles.title}>Transaksi Berhasil</Text>
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
                <Text>Nama Barang :</Text>
                <Text>Data</Text>
              </View>
            </View>
            <View style={styles.inBottom}>
              <Text>Harga Beli :</Text>
              <View style={styles.pactRp}>
                <Text>Rp .</Text>
              </View>
            </View>
            <View style={styles.inBottom}>
              <Text>Harga Jual :</Text>
              <View style={styles.pactRp}>
                <Text>Rp .</Text>
              </View>
            </View>
            <View style={styles.inBottom}>
              <Text>Diskon :</Text>
            </View>
            <View style={styles.inBottom}>
              <Text>Date :</Text>
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

export default CheckOutS;
