import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  RefreshControl,
  ToastAndroid,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {styles} from '../styles/styleLaporStock';
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export class StockLaporan extends Component {
  constructor() {
    super();
    this.state = {
      response: [],
      loading: false,
      refreash: false,
    };
  }

  componentDidMount() {
    this.getStock();
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getStock();
  }

  getStock = async () => {
    this.setState({loading: true});
    try {
      await axios('https://project-mini.herokuapp.com/api/laporan-stok', {
        headers: {
          Authorization: `Bearer${this.props.userData.userReducer.token}`,
        },
      })
        .then((result) => {
          this.setState({
            loading: false,
            response: result.data.data,
            refreash: false,
          });
        })
        .catch((err) => {
          console.log('Erororo=', err);
          this.setState({loading: false, refreash: false, isEror: true});
          ToastAndroid.show('Gagal Memuat Data', ToastAndroid.LONG);
        });
    } catch (err) {
      this.setState({loading: false, refreash: false, isEror: true});
      ToastAndroid.show('Gagal Memuat Data', ToastAndroid.LONG);
      console.log('Errro==', err);
    }
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.Loading}>
          <Spinner color={'#F9C900'} size={40} type="FadingCircleAlt" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    } else if (this.state.isEror) {
      return (
        <View style={styles.Loading}>
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
        <View style={styles.header}>
          <Text style={styles.title}>Stock Gudang </Text>
        </View>
        <ScrollView
          style={styles.body}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreash}
              onRefresh={() => this.onRefreash()}
            />
          }>
          {this.state.response.map((i) => {
            return (
              <View style={styles.inbody}>
                <View style={styles.pactName}>
                  <Text style={styles.text}>Nama Barang : </Text>
                  <Text>{i.nama_barang}</Text>
                </View>
                <View style={styles.pactData}>
                  <View style={styles.data}>
                    <Text style={styles.text}>Stock</Text>
                    <Text>{i.stok} pcs</Text>
                  </View>
                  <View style={styles.data}>
                    <Text style={styles.text}>Update</Text>
                    <Text>{i.diperbarui}</Text>
                  </View>
                </View>
              </View>
            );
          })}
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
export default connect(mapStateToProps)(StockLaporan);
