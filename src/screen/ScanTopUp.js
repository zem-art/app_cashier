import React, {Component} from 'react';
import {Text, View, ToastAndroid, StatusBar} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import {styles} from '../styles/styleScanQr';
import {connect} from 'react-redux';

export class ScanTopUp extends Component {
  constructor() {
    super();
    this.state = {
      kode: '',
    };
  }

  goTo() {
    this.props.navigation.navigate('TopUpScan', {item: this.state.kode});
  }

  Scan = (coba) => {
    try {
      console.log('dataRR==', coba.data);
      if (coba.data.length <= 14) {
        ToastAndroid.show(coba.data, ToastAndroid.LONG);
        this.setState({kode: coba.data});
        this.goTo();
      } else {
        ToastAndroid.show('Barcode Salah', ToastAndroid.LONG);
      }
    } catch (err) {
      console.log('Eroro==', err);
      this.props.navigation.goBack();
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
export default connect(mapStateToProps)(ScanTopUp);
