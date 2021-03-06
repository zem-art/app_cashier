import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {stylesB} from '../styles/stylesHomeB';

export class BodyHomeB extends Component {
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
        <TouchableOpacity style={stylesB.inBody}>
          <Image
            style={stylesB.icon}
            source={require('../assets/icon/expends.png')}
          />
          <Text>Pengeluaran</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default BodyHomeB;
