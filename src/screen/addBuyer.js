import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleBuyer';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import {connect} from 'react-redux';
import Spinner from 'react-native-spinkit';

export class AddBuyer extends Component {
  constructor() {
    super();
    this.state = {
      getSuplaier: '',
      supllaier: [],
      price: '',
      item: '',
      goods: '',
      isloading: false,
      isEror: false,
      refreash: false,
      data: {},
      heloading: false,
    };
  }
  componentDidMount() {
    this.getSupllaier();
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getSupllaier();
  }

  getSupllaier = async () => {
    this.setState({isloading: true});
    try {
      await axios
        .get('https://project-mini.herokuapp.com/api/supplier', {
          headers: {
            Authorization: `Bearer${this.props.userData.userReducer.token}`,
          },
        })
        .then((result) => {
          console.log('Berhasil Get==', result.data.data);
          this.setState({
            supllaier: result.data.data,
            isloading: false,
            isEror: false,
            refreash: false,
          });
        });
    } catch (err) {
      console.log('Eroro Get Supplaier', err);
      this.setState({isloading: false, isEror: true, refreash: false});
    }
  };

  sendData() {
    this.setState({heloading: true});
    axios({
      url: 'https://project-mini.herokuapp.com/api/add-pembelian',
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
      data: {
        supplier: this.state.getSuplaier,
        barang: this.state.goods,
        total_barang: this.state.item,
        harga_satuan: this.state.price,
      },
    })
      .then((result) => {
        console.log('Succses==', result.data.data);
        this.setState({data: result.data.data, heloading: false});
        ToastAndroid.show('Sucsess Add Pembeli', ToastAndroid.LONG);
      })
      .catch((err) => {
        console.log('Eroror Post==', err);
        this.setState({heloading: false});
        ToastAndroid.show('Data Belum Di Masukan', ToastAndroid.LONG);
      });
  }
  render() {
    if (this.state.isloading) {
      return (
        <View style={styles.loading}>
          <Spinner color={'blue'} size={40} type="ThreeBounce" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    } else if (this.state.isEror) {
      return (
        <View style={styles.loading}>
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
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../assets/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Add Supllier</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddSupllaier')}>
            <Image
              style={styles.back}
              source={require('../assets/icon/addSupplier.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreash}
              onRefresh={() => this.onRefreash()}
            />
          }>
          <View style={styles.body}>
            <View style={styles.inbody}>
              <Text style={styles.text}>Nama Barang</Text>
              <TextInput
                style={styles.input}
                placeholder="Input Nama Barang"
                onChangeText={(barang) => this.setState({goods: barang})}
              />
            </View>
            <Picker
              mode="dropdown"
              selectedValue={this.state.getSuplaier}
              style={styles.picker}
              onValueChange={(itemValue) => {
                if (itemValue === 'add') {
                  this.props.navigation.navigate('AddSupllaier');
                } else {
                  this.setState({getSuplaier: itemValue});
                }
              }}>
              <Picker.Item label="Silahkan Pilih Supllaier" value="" />
              <Picker.item label="Add Supllaier" value="add" />
              {this.state.supllaier.map((item) => {
                return (
                  <Picker.item label={item.nama_supplier} value={item.id} />
                );
              })}
            </Picker>
            <View style={styles.pactHitung}>
              <View style={styles.price}>
                <Text style={styles.text}>Total Barang</Text>
                <TextInput
                  keyboardType="number-pad"
                  placeholder="Price Supllier"
                  onChangeText={(total) => this.setState({item: total})}
                />
              </View>
              <View style={styles.price}>
                <Text style={styles.text}>Harga</Text>
                <TextInput
                  keyboardType="number-pad"
                  placeholder="Price"
                  onChangeText={(harga) => this.setState({price: harga})}
                />
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={() => this.sendData()}
              style={styles.klik}>
              {this.state.heloading ? (
                <Spinner
                  // style={styles.loading}
                  color={'white'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.textKlik}>Add</Text>
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
export default connect(mapStateToProps)(AddBuyer);
// onValueChange={(itemValue) => {
//   if (itemValue === 'add') {
//     munculin Modal
//   } else {
//     this.setState({inputCategory: itemValue});
//   }
// }}

// kitabuatstatisuntukvaluenya
// Picker.item label="Tambah_Barang" value="add"
