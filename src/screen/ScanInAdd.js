import React, {Component} from 'react';
import {
  StatusBar,
  Text,
  View,
  ToastAndroid,
  Alert,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
// import axios from 'axios';
import {styles} from '../styles/styleScanQr';
import {connect} from 'react-redux';

export class ScanInAdd extends Component {
  constructor() {
    super();
    this.state = {
      kode: {},
      modal: false,
    };
  }

  goTo(data) {
    this.props.navigation.navigate('AddCart', {item: data});
  }

  Scan = (coba) => {
    try {
      console.log('dataNya==', coba.data);
      ToastAndroid.show(coba.data, ToastAndroid.LONG);
      this.setState({kode: coba.data});
      this.goTo(coba.data);
      // this.openModal();
    } catch (err) {
      console.log('Eroro==', err);
    }
  };

  openModal = () => {
    this.setState({modal: true});
  };

  closeModal = () => {
    this.setState({modal: false});
  };

  render() {
    const {modal} = this.state;
    return (
      <View style={styles.container2}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <Text style={styles.title}>Scan Barcode</Text>
        </View>
        <View style={styles.body}>
          <QRCodeScanner
            flashMode={RNCamera.Constants.FlashMode.off}
            showMarker
            vibrate={true}
            onRead={(coba) => this.Scan(coba)}
            reactivate
            // reactivateTimeout={1000}
          />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.klik}>
            <Image
              style={styles.klik}
              source={require('../assets/icon/Back.png')}
            />
          </TouchableOpacity>
        </View>
        <Modal animationType="fade" transparent visible={modal}>
          <View style={styles.Modal}>
            <View style={styles.inModa}>
              <Text style={styles.titleModal}>Masukan Barang Anda</Text>
              <View style={styles.ininModal}>
                <Text>Kode Barang</Text>
                <TextInput placeholder="Kode Barang" />
              </View>
              <View style={styles.ininModal}>
                <Text>Price</Text>
                <TextInput placeholder="Jumlah" />
              </View>
              <View style={styles.ininModal}>
                <Text>Kode Member</Text>
                <TextInput placeholder="Kode Unix" />
              </View>
              <TouchableOpacity style={styles.iconInModal}>
                <Image
                  style={styles.backinModal}
                  source={require('../assets/icon/addCart.png')}
                />
              </TouchableOpacity>
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
export default connect(mapStateToProps)(ScanInAdd);
