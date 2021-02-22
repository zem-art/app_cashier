import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleAddBarang';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import {connect} from 'react-redux';
import Spinner from 'react-native-spinkit';

export class AddBarang extends Component {
  constructor() {
    super();
    this.state = {
      brand: '',
      category: '',
      dataCategory: [],
      dataBrand: [],
      loading: false,
      nameGoods: '',
      InitialPrice: '',
      FinalPrice: '',
      stock: '',
      data: {},
      isloading: false,
    };
  }

  componentDidMount() {
    this.getCategory();
    this.getBrand();
  }

  goTo() {
    this.props.navigation.navigate('SucsessAdGoods', {item: this.state.data});
  }

  AddBarang() {
    this.setState({isloading: true});
    axios({
      url: 'https://project-mini.herokuapp.com/api/add-barang',
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
      data: {
        nama_barang: this.state.nameGoods,
        harga_beli: this.state.InitialPrice,
        harga_jual: this.state.FinalPrice,
        stok: this.state.stock,
        kategori_id: this.state.category,
        merek_id: this.state.brand,
      },
    })
      .then((result) => {
        // console.log('Sucsess==', result.data.data);
        ToastAndroid.show('Data Berhasil Di Tambaha Kan ', ToastAndroid.LONG);
        this.setState({data: result.data.data, isloading: false});
        this.goTo();
      })
      .catch((err) => {
        console.log('Eror Post Data==', err);
        ToastAndroid.show('Data Gagal Di Tambah Kan', ToastAndroid.LONG);
        this.setState({isloading: false});
      });
  }

  getBrand = async () => {
    this.setState({loading: true});
    try {
      await axios
        .get('https://project-mini.herokuapp.com/api/merek', {
          headers: {
            Authorization: `Bearer${this.props.userData.userReducer.token}`,
          },
        })
        .then((result) => {
          console.log('get Sucsess=', result.data.data);
          this.setState({dataBrand: result.data.data, loading: false});
        })
        .catch((err) => {
          console.log('Eror Get Data==', err);
          this.setState({loading: false});
        });
    } catch (err) {
      console.log('Eroro Get Data==', err);
      this.setState({loading: false});
    }
  };
  getCategory = async () => {
    this.setState({loading: true});
    try {
      await axios
        .get('https://project-mini.herokuapp.com/api/kategori', {
          headers: {
            Authorization: `Bearer${this.props.userData.userReducer.token}`,
          },
        })
        .then((result) => {
          console.log('get Sucsess=', result.data.data);
          this.setState({dataCategory: result.data.data, loading: false});
        })
        .catch((err) => {
          console.log('Eror Get Data==', err);
          this.setState({loading: false});
        });
    } catch (err) {
      console.log('Eroro Get Data==', err);
      this.setState({loading: false});
    }
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.isloading}>
          <Spinner color={'blue'} size={40} type="ThreeBounce" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    } else if (this.state.isEror) {
      return (
        <View style={styles.isloading}>
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
    // console.log('Ini data Redux==', this.props.userData.userReducer.token);
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
          <Text style={styles.title}>Add Barang</Text>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.inBody}>
              <Text style={styles.textL}>Nama Barang</Text>
              <TextInput
                placeholder="Ex : Nama Barang"
                onChangeText={(name) => this.setState({nameGoods: name})}
              />
            </View>
            <View style={styles.pactHitung}>
              <View style={styles.inHitung}>
                <Text style={styles.textL}>Harga Awal</Text>
                <View style={styles.pactInHitung}>
                  <Text style={styles.textRP}>Rp.</Text>
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="Ex : Rp. 500"
                    style={styles.input}
                    onChangeText={(awal) => this.setState({InitialPrice: awal})}
                  />
                </View>
              </View>
              <View style={styles.inHitung}>
                <Text style={styles.textL}>Harga Jual</Text>
                <View style={styles.pactInHitung}>
                  <Text style={styles.textRP}>Rp.</Text>
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="Ex : 5000"
                    onChangeText={(final) => this.setState({FinalPrice: final})}
                  />
                </View>
              </View>
            </View>
            <View style={styles.pactHitung}>
              <View style={styles.inHitung}>
                <Text style={styles.textL}>Stock</Text>
                <TextInput
                  keyboardType="number-pad"
                  placeholder="Ex : 10"
                  onChangeText={(stok) => this.setState({stock: stok})}
                />
              </View>
              <View style={styles.inHitung}>
                <Text style={styles.textL}>Brand</Text>
                <Picker
                  mode="dropdown"
                  selectedValue={this.state.brand}
                  onValueChange={(itemValue) => {
                    if (itemValue === 'addBrand') {
                      null;
                    } else {
                      this.setState({brand: itemValue});
                    }
                  }}>
                  {this.state.dataBrand.map((item) => {
                    return (
                      <Picker.Item label={item.nama_merek} value={item.id} />
                    );
                  })}
                  <Picker.Item label="Tambah Brand" value="addBrand" />
                </Picker>
              </View>
            </View>
            <View style={styles.inBody}>
              <Text style={styles.textL}>Category</Text>
              <Picker
                mode="dropdown"
                selectedValue={this.state.category}
                style={styles.picker}
                onValueChange={(itemValue) => {
                  if (itemValue === 'addKategori') {
                    null;
                  } else {
                    this.setState({category: itemValue});
                  }
                }}>
                {this.state.dataCategory.map((item) => {
                  return (
                    <Picker.Item label={item.nama_kategori} value={item.id} />
                  );
                })}
                <Picker.Item label="Tambah Kategori" value="addKategori" />
              </Picker>
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={() => this.AddBarang()}
              style={styles.inBottom}>
              {this.state.isloading ? (
                <Spinner color={'white'} size={25} type="Wave" />
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
export default connect(mapStateToProps)(AddBarang);
