import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import axios from 'axios';
import {styles} from '../styles/styleScanQr';

export class ScanQr extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }
  getBarCode() {
    try {
      axios
        .get('', {})
        .then((result) => {
          console.log('Berhasil==', result.data);
        })
        .catch((err) => {
          console.log('eroro get Data==', err);
        });
    } catch (err) {
      console.log('Eroor==', err);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Scan QR</Text>
        </View>
        <QRCodeScanner
          flashMode={RNCamera.Constants.FlashMode.auto}
          showMarker
          vibrate={true}
        />
      </View>
    );
  }
}

export default ScanQr;
