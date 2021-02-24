import React, {Component} from 'react';
import {StatusBar, Text, View, ToastAndroid} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import axios from 'axios';
import {styles} from '../styles/styleScanQr';
import {connect} from 'react-redux';

export class ScanQr extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  Scan = (coba) => {
    try {
      console.log('dataRR==', coba.data);
      ToastAndroid.show(coba.data, ToastAndroid.LONG);
      // this.props.navigation.goBack();
    } catch (err) {
      console.log('Eroro==', err);
    }
  };
  Scan() {}

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
