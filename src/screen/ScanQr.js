import React, {Component} from 'react';
import {StatusBar, Text, View, ToastAndroid, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
// import axios from 'axios';
import {styles} from '../styles/styleScanQr';
import {connect} from 'react-redux';
import axios from 'axios';

export class ScanQr extends Component {
  constructor() {
    super();
    this.state = {
      kode: {},
    };
  }

  routesGoto = () => {
    Alert.alert(
      'Silahkan Pilih',
      'Selection',
      [
        {
          text: 'Cancel',
          onPress: () => ToastAndroid.show('Cancel Select', ToastAndroid.LONG),
          style: 'cancel',
        },
        {text: 'Scan', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  getData(data) {
    try {
      axios
        .get(`https://project-mini.herokuapp.com/api/barang/${data}`, {
          headers: {
            Authorization: `Bearer${this.props.userData.userReducer.token}`,
          },
        })
        .then((result) => {
          console.log('sucsse==', result.data);
        });
    } catch (err) {
      console.log('Eroror==', err);
    }
  }

  Scan = (coba) => {
    try {
      console.log('dataRR==', coba.data);
      ToastAndroid.show(coba.data, ToastAndroid.LONG);
      this.getData(coba.data);
    } catch (err) {
      console.log('Eroro==', err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <View style={styles.header}>
          <Text style={styles.title}>Scan Barcode</Text>
        </View>
        <View style={styles.body}>
          <QRCodeScanner
            flashMode={RNCamera.Constants.FlashMode.auto}
            showMarker
            vibrate={true}
            onRead={(coba) => this.Scan(coba)}
            reactivate
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};
export default connect(mapStateToProps)(ScanQr);
