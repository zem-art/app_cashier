import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import {styles} from '../styles/styleSucssesA';
import LottieView from 'lottie-react-native';

export class CheckOut extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    const {data} = this.props.route.params;
    this.state = {
      date: item.created_at,
      nameKasir: item.kasir,
      moneyChanges: item.kembalian,
      pay: item.harga_total,
      kode: item.kode_member,
      cash: item.type,
      moneyCash: item.dibayar,
      cart: data,
      modal: false,
    };
  }
  closeModal() {
    this.setState({modal: false});
  }

  openModal() {
    this.setState({modal: true});
  }
  render() {
    console.log('ini Data ==', this.props.route.params);
    const {modal} = this.state;
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
              <Text>Kode :</Text>
              <Text>{this.state.kode} </Text>
            </View>
            <View style={styles.inBottom}>
              <Text>Date :</Text>
              <Text>{this.state.date} </Text>
            </View>
          </View>
          <Modal transparent={true} animationType="slide" visible={modal}>
            <View style={styles.Modal}>
              {this.state.cart.map((i) => {
                return (
                  <View iew style={styles.inModalS}>
                    <View style={styles.pactTitleM}>
                      <Text>Nama Barang</Text>
                      <TouchableOpacity
                        onPress={() => this.closeModal()}
                        style={styles.pactKlikM}>
                        <Image
                          style={styles.close}
                          source={require('../assets/icon/close.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.ininModalS}>
                      <View style={styles.data}>
                        <View style={styles.pactNameM}>
                          <Text>Nama Barang : </Text>
                          <Text>{i.nama_barang}</Text>
                        </View>
                        <View style={styles.inData}>
                          <View>
                            <Text>Unit Price :</Text>
                            <Text>Rp. {i.harga_satuan}</Text>
                          </View>
                          <View>
                            <Text>Amount :</Text>
                            <Text>{i.pcs} Pcs</Text>
                          </View>
                          <View>
                            <Text>Discount :</Text>
                            <Text>{i.diskon} %</Text>
                          </View>
                          <View>
                            <Text>Price :</Text>
                            <Text>Rp. {i.total_harga}</Text>
                          </View>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                );
              })}
            </View>
          </Modal>
          <View style={styles.pactKlik}>
            <TouchableOpacity
              onPress={() => this.openModal()}
              style={styles.inKlik}>
              <Text style={styles.text}>See Item</Text>
            </TouchableOpacity>
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
