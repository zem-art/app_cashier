import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  ToastAndroid,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import {styles} from '../styles/styleMyCart';
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export class MyCart extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
      response: {},
      PactModal: false,
      buyer: '',
    };
  }

  componentDidMount() {
    this.getCart();
  }

  leadTo() {
    this.props.navigation.navigate('SucssesCart', {item: this.state.response});
  }

  PaySaldoGoto() {
    this.props.navigation.navigate('PaySaldo');
    this.closeModal();
  }

  openModal() {
    this.setState({PactModal: true});
  }
  closeModal() {
    this.setState({PactModal: false});
  }

  getCart = async () => {
    try {
      await axios('https://project-mini.herokuapp.com/api/keranjang', {
        headers: {
          Authorization: `Bearer${this.props.userData.userReducer.token}`,
        },
      })
        .then((result) => {
          ToastAndroid.show('Data Berhasil Di Tampilkan', ToastAndroid.LONG);
          // console.log('DAta==', result.data.data);
          this.setState({data: result.data.data});
        })
        .catch((err) => {
          console.log('Eroro Data==', err);
          if (err.data == null) {
            ToastAndroid.show('Keranjang Anda Kosong', ToastAndroid.LONG);
          } else {
            ToastAndroid.show('Gagal Mengambil Data', ToastAndroid.LONG);
          }
        });
    } catch (err) {
      console.log('erro', err);
    }
  };

  checkOuth() {
    this.setState({loading: true});
    axios({
      url: 'https://project-mini.herokuapp.com/api/add-transaksi',
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
      data: {
        dibayar: this.state.buyer,
      },
    })
      .then((result) => {
        console.log('Sucsse Chec()t==', result.data);
        this.getCart();
        this.setState({loading: false, response: result.data.data});
        this.leadTo();
        this.closeModal();
      })
      .catch((err) => {
        console.log('Eroror==', err);
        this.setState({loading: false});
      });
  }

  deleteAll() {
    axios({
      url: 'https://project-mini.herokuapp.com/api/delete-transaksi',
      method: 'DELETE',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
    })
      .then((result) => {
        console.log('Sucsse Delete==', result.data);
        this.getCart();
        this.setState({loading: false, data: []});
      })
      .catch((err) => {
        console.log('Eroror==', err);
        this.setState({loading: false});
      });
  }
  RouteGo() {
    Alert.alert(
      'Delete',
      'Mau Menghapus Semua Barang',
      [
        {
          text: 'No',
          onPress: () => ToastAndroid.show('Delete Cancel', ToastAndroid.LONG),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => this.deleteAll(),
        },
      ],
      {cancelable: false},
    );
  }

  render() {
    const {PactModal} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <View style={styles.inHeader}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={styles.icon}
                source={require('../assets/icon/back.png')}
              />
            </TouchableOpacity>
            <Text style={styles.title}> My Cart </Text>
          </View>
          <View style={styles.delete}>
            <TouchableOpacity onPress={() => this.RouteGo()}>
              <Image
                style={styles.icondelete}
                source={require('../assets/icon/delete.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.body}>
            {this.state.data.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('DeleteId', {item: item})
                  }
                  style={styles.inBody}>
                  <View style={styles.pactName}>
                    <Text style={styles.textName}>Nama Barang :</Text>
                    <Text>{item.nama_barang} </Text>
                  </View>
                  <View style={styles.data}>
                    <View style={styles.inItem}>
                      <Text>Diskon</Text>
                      <Text>{item.diskon} %</Text>
                    </View>
                    <View style={styles.inItem}>
                      <Text>Satuan</Text>
                      <Text>Rp. {item.harga_satuan}</Text>
                    </View>
                    <View style={styles.inItem}>
                      <Text>Jumlah</Text>
                      <Text>{item.pcs} Pcs</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => this.openModal()}
            style={styles.inBottom}>
            <Text style={styles.textSend}>Check Out</Text>
          </TouchableOpacity>
        </View>
        <Modal transparent={true} animationType="slide" visible={PactModal}>
          <View style={styles.Modal}>
            <TouchableOpacity
              onPress={() => this.closeModal()}
              style={styles.topModal}
            />
            <ScrollView>
              <View style={styles.dataMoal}>
                <Text style={styles.titleModal}>
                  Silahkan Masukan Nominal Uang Anda
                </Text>
                <View style={styles.topDataModal}>
                  <View style={styles.input}>
                    <Text>Rp .</Text>
                    <TextInput
                      style={styles.iinput}
                      keyboardType="number-pad"
                      placeholder="0.000.00"
                      onChangeText={(dibayar) =>
                        this.setState({buyer: dibayar})
                      }
                    />
                  </View>
                  <Text style={styles.textAttention}>
                    * Hanya Untuk Pembayar Cash
                  </Text>
                </View>
                <View style={styles.pactklikModal}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Cart')}
                    style={styles.klikM1}>
                    <Text style={styles.textModal}>Exit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.PaySaldoGoto()}
                    style={styles.klikM2}>
                    <Text style={styles.textModal}>Saldo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.checkOuth()}
                    style={styles.klikM}>
                    {this.state.loading ? (
                      <Spinner
                        style={styles.loading}
                        color={'#FFFFFF'}
                        size={25}
                        type="Wave"
                      />
                    ) : (
                      <Text style={styles.textModal}>Cash</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
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
export default connect(mapStateToProps)(MyCart);
