import React, {Component} from 'react';
import {Text, View, StatusBar, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/styleSucsseMonth';

export class SucssesMonth extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      month: item.bulan,
      spending: JSON.stringify(item.pengeluaran),
      purcase: JSON.stringify(item.pembelian_produk),
      sales: JSON.stringify(item.penjualan),
      grossLoss: JSON.stringify(item.laba_kotor),
      lossAndLoss: JSON.stringify(item.laba_rugi),
    };
  }
  render() {
    console.log('DAtaP==', this.props.route.params);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <Text style={styles.title}>Laporan Bulan {this.state.month}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inbody}>
            <Text style={styles.text}>Penjualan :</Text>
            <Text>Rp . {this.state.spending}</Text>
          </View>
          <View style={styles.inbody}>
            <Text style={styles.text}>Pembelian :</Text>
            <Text>Rp . {this.state.purcase}</Text>
          </View>
          <View style={styles.inbody}>
            <Text style={styles.text}>Penjualan :</Text>
            <Text>Rp . {this.state.sales}</Text>
          </View>
          <View style={styles.inbody}>
            <Text style={styles.text}>Kerugian :</Text>
            <Text>Rp . {this.state.grossLoss}</Text>
          </View>
          <View style={styles.inbody}>
            <Text style={styles.text}>Sisa Kerugian :</Text>
            <Text>Rp . {this.state.lossAndLoss}</Text>
          </View>
        </View>
        <View style={styles.pactKlik}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Dashboard')}
            style={styles.klik}>
            <Text style={styles.textSend}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SucssesMonth;
