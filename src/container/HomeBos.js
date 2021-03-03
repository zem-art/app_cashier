import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {stylesB} from '../styles/stylesHomeB';
import {connect} from 'react-redux';

export class HomeBos extends Component {
  render() {
    console.log('ini Data  redux==', this.props.userData.userReducer);
    return (
      <View style={stylesB.container}>
        <StatusBar backgroundColor="#F9C900" />
        <View style={stylesB.header}>
          <Text style={stylesB.title}> Dashboard </Text>
        </View>
        <View style={stylesB.body}>
          <View style={stylesB.inBody}>
            <Text>Laporan Pembelian</Text>
          </View>
          <View style={stylesB.inBody}>
            <Text>Laporan Penjualan</Text>
          </View>
          <View style={stylesB.inBody}>
            <Text>Laporan Pemasukan</Text>
          </View>
          <View style={stylesB.inBody}>
            <Text>Laporan Pengeluaran</Text>
          </View>
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
export default connect(mapStateToProps)(HomeBos);
