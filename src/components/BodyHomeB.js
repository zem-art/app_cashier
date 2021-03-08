import React, {Component} from 'react';
import {Text, Alert, ToastAndroid, Image, TouchableOpacity} from 'react-native';
import {stylesB} from '../styles/stylesHomeB';

export class BodyHomeB extends Component {
  Route = () => {
    return Alert.alert(
      'Attendance',
      'Absensi Karyawan',
      [
        {
          text: 'Cancel',
          onPress: () => ToastAndroid.show('Cancel', ToastAndroid.LONG),
          style: 'cancel',
        },
        {
          text: 'Bulanan',
          onPress: () => this.props.navigation.navigate('AbsenBulan'),
        },
        {
          text: 'Harian',
          onPress: () => this.props.navigation.navigate('AbsenHarian'),
        },
      ],
      {cancelable: false},
    );
  };
  render() {
    return (
      <>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddPurcase')}
          style={stylesB.inBody}>
          <Image
            style={stylesB.icon}
            source={require('../assets/icon/purcase.png')}
          />
          <Text>Pembelian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Salesreport')}
          style={stylesB.inBody}>
          <Image
            style={stylesB.icon}
            source={require('../assets/icon/sales.png')}
          />
          <Text>Penjualan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Loosreport')}
          style={stylesB.inBody}>
          <Image
            style={stylesB.icon}
            source={require('../assets/icon/Loss.png')}
          />
          <Text>Kerugian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ReportPurcaseMont')}
          style={stylesB.inBody}>
          <Image
            style={stylesB.icon}
            source={require('../assets/icon/inCome.png')}
          />
          <Text>Pemasukan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Spending')}
          style={stylesB.inBody}>
          <Image
            style={stylesB.icon}
            source={require('../assets/icon/expends.png')}
          />
          <Text>Pengeluaran</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.Route()} style={stylesB.inBody}>
          <Image
            style={stylesB.icon}
            source={require('../assets/icon/Check.png')}
          />
          <Text>Absensi Karyawan</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default BodyHomeB;
