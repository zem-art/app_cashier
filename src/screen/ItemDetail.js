import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {styles} from '../styles/styeleDetail';

export class ItemDetail extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      id: item.id,
      name: item.nama_barang,
      qrCode: item.barcode,
      brand: item.merek,
      stock: item.stok,
      finalBuy: item.harga_jual,
      category: item.kategori,
    };
  }
  render() {
    console.log('Ini Data Params==', this.props.route.params);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('StockGudang', {
                item: this.state.id,
              })
            }>
            <Image
              style={styles.back}
              source={require('../assets/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Detail</Text>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <TouchableOpacity style={styles.inBody}>
              <Image style={styles.barcode} source={{uri: this.state.qrCode}} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Name : </Text>
                <Text style={styles.text}>{this.state.name}</Text>
              </View>
            </View>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Merek : </Text>
                <Text style={styles.text}>{this.state.brand}</Text>
              </View>
            </View>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Stock : </Text>
                <Text style={styles.text}>{this.state.stock}</Text>
              </View>
            </View>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Kategori : </Text>
                <Text style={styles.text}>{this.state.category}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};
export default connect(mapStateToProps)(ItemDetail);
