import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleDetailP';
import axios from 'axios';
import {connect} from 'react-redux';
import Spinner from 'react-native-spinkit';

export class DetailP extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      id: item.id,
      name: item.nama_barang,
      supllaier: item.supplier,
      price: item.pcs,
      create: item.created_at,
      update: item.update_at,
      unitPrice: item.harga_satuan,
      totalPrice: item.total_harga,
      loading: false,
    };
  }

  goto() {
    this.props.navigation.navigate('Staf');
  }

  changeStatus() {
    this.setState({loading: true});
    ToastAndroid.show('Sedang Membuat Laporan', ToastAndroid.LONG);
    axios({
      url: `https://project-mini.herokuapp.com/api/update-pembelian/${this.state.id}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
    })
      .then((result) => {
        console.log('Sucsses Ubah Data==', result.data);
        this.setState({loading: false});
        this.goto();
        ToastAndroid.show('Laporan Behasil Di Buat', ToastAndroid.LONG);
      })
      .catch((err) => {
        console.log('Eroror Change Status==', err);
        this.setState({loading: false});
        ToastAndroid.show('Laporan Gagal Di Buat', ToastAndroid.LONG);
      });
  }

  render() {
    // console.log('iNi Data Params==', this.props.route.params);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../assets/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Detail Pembeli</Text>
        </View>
        <ScrollView>
          <View style={styles.bottom}>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Name Barang : </Text>
                <Text>{this.state.name}</Text>
              </View>
            </View>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Harga Satuan : </Text>
                <Text>{this.state.unitPrice}</Text>
              </View>
            </View>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Total Harga: </Text>
                <Text>{this.state.totalPrice}</Text>
              </View>
            </View>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Jumlah: </Text>
                <Text>{this.state.price}</Text>
              </View>
            </View>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Supllaier : </Text>
                <Text>{this.state.supllaier}</Text>
              </View>
            </View>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Create : </Text>
                <Text>{this.state.create}</Text>
              </View>
            </View>
          </View>
          <View style={styles.pactKlik}>
            <TouchableOpacity
              onPress={() => this.changeStatus()}
              style={styles.inKlik}>
              {this.state.loading ? (
                <Spinner color={'white'} size={25} type="Wave" />
              ) : (
                <Text style={styles.textSend}>Make a Report</Text>
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
export default connect(mapStateToProps)(DetailP);
