import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Modal,
  TextInput,
  ToastAndroid,
} from 'react-native';

import {connect} from 'react-redux';
import {styles} from '../styles/styleEdit';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export class EditBarang extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      Imagebarcode: false,
      name: item.nama_barang,
      diskon: JSON.stringify(item.diskon),
      stock: JSON.stringify(item.stok),
      kode: item.uid,
      barcode: item.barcode,
      id: item.id,
      finalPrice: JSON.stringify(item.harga_jual),
      initialPrice: JSON.stringify(item.harga_beli),
      loading: false,
      isloading: false,
      submit: {},
    };
  }

  openBarcode() {
    this.setState({Imagebarcode: true});
  }
  closeBarcode() {
    this.setState({Imagebarcode: false});
  }

  goTO() {
    this.props.navigation.navigate('Staf');
  }

  submitBarang() {
    this.setState({isloading: true});
    axios({
      url: `https://project-mini.herokuapp.com/api/update-barang/${this.state.id}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
      data: {
        nama_barang: this.state.name,
        harga_beli: '',
        harga_jual: this.state.finalPrice,
        stok: this.state.stock,
        diskon: this.state.diskon,
      },
    })
      .then((result) => {
        console.log('Sucsses Submit Barang==', result.data.data);
        ToastAndroid.show('Sucsses Edit Barang', ToastAndroid.LONG);
        this.setState({isloading: false, submit: result.data.data});
      })
      .catch((err) => {
        console.log('eroro==', err);
        ToastAndroid.show('Gagal Edit Barang', ToastAndroid.LONG);
        this.setState({isloading: false});
      });
  }

  deleteBarang() {
    this.setState({loading: true});
    try {
      axios
        .delete(
          `https://project-mini.herokuapp.com/api/delete-barang/${this.state.id}`,
          {
            headers: {
              Authorization: `Bearer${this.props.userData.userReducer.token}`,
            },
          },
        )
        .then((result) => {
          console.log('Sucsse Delete Barang==', result.data.data);
          ToastAndroid.show('Sucsses Delete Barang', ToastAndroid.LONG);
          this.goTO();
          this.setState({loading: false});
        })
        .catch((err) => {
          console.log('eroro==', err);
          ToastAndroid.show('Eroro Delete Barang', ToastAndroid.LONG);
          this.setState({loading: false});
        });
    } catch (err) {
      console.log('Eroro==', err);
      ToastAndroid.show('Eroror Delete', ToastAndroid.LONG);
      this.setState({loading: false});
    }
  }
  render() {
    console.log('Ini Data==', this.props.route.params);
    const {Imagebarcode} = this.state;
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
          <Text style={styles.title}>Edit Barang</Text>
        </View>
        <ScrollView>
          <View style={styles.bottom}>
            <View style={styles.StartBottom}>
              <View>
                <Text>Nama Barang :</Text>
                <TextInput
                  value={this.state.name}
                  placeholder="Nama Barang"
                  onChangeText={(nama) => this.setState({name: nama})}
                />
              </View>
              <TouchableOpacity onPress={() => this.openBarcode()}>
                <Image
                  style={styles.barcode}
                  source={require('../assets/icon/Barcode.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inBottom}>
              <Text>Harga Jual :</Text>
              <TextInput
                value={this.state.initialPrice}
                placeholder="Text"
                onChangeText={(jual) => this.setState({finalPrice: jual})}
              />
            </View>
            <View style={styles.inBottom}>
              <Text>Harga Jual :</Text>
              <TextInput
                value={this.state.finalPrice}
                placeholder="Text"
                onChangeText={(jual) => this.setState({finalPrice: jual})}
              />
            </View>
            <View style={styles.inBottom}>
              <Text>Stock :</Text>
              <TextInput
                value={this.state.stock}
                placeholder="Text"
                onChangeText={(stok) => this.setState({stock: stok})}
              />
            </View>
            <View style={styles.inBottom}>
              <Text>Diskon :</Text>
              <TextInput
                value={this.state.diskon}
                placeholder="Text"
                onChangeText={(potongan) => this.setState({diskon: potongan})}
              />
            </View>
          </View>
          <View style={styles.pactKlik}>
            <TouchableOpacity
              onPress={() => this.deleteBarang()}
              style={styles.inKlik}>
              {this.state.loading ? (
                <Spinner color={'white'} size={25} type="Wave" />
              ) : (
                <Text style={styles.text}>Delete</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.submitBarang()}
              style={styles.inKlik1}>
              {this.state.isloading ? (
                <Spinner color={'white'} size={25} type="Wave" />
              ) : (
                <Text style={styles.text}>Submit</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Modal transparent={true} animationType="fade" visible={Imagebarcode}>
          <View style={styles.Modal}>
            <View style={styles.inModal}>
              <TouchableOpacity
                onPress={() => this.closeBarcode()}
                style={styles.pactBack}>
                <Image
                  style={styles.back}
                  source={require('../assets/icon/close.png')}
                />
              </TouchableOpacity>
              <Text style={styles.textBarcode}>{this.state.kode}</Text>
              <Image
                style={styles.inBarcode}
                source={{uri: this.state.barcode}}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};
export default connect(mapStateToProps)(EditBarang);
