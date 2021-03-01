import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ToastAndroid,
  ScrollView,
} from 'react-native';

import axios from 'axios';
import {connect} from 'react-redux';
import {styles} from '../styles/styeleDetail';

export class DeleteId extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      loading: false,
      data: [],
      name: item.nama_barang,
      price: item.total_harga,
      disc: item.diskon,
      satuan: item.harga_satuan,
    };
  }

  render() {
    console.log('Ini Data ==', this.props.route.params);
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../assets/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Detail</Text>
        </View>
        <ScrollView>
          <View style={styles.bottom}>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Name : </Text>
                <Text style={styles.text}>{this.state.name}</Text>
              </View>
            </View>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Harga Satuan : </Text>
                <Text style={styles.text}>Rp . {this.state.satuan}</Text>
              </View>
            </View>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Diskon : </Text>
                <Text style={styles.text}>{this.state.disc} %</Text>
              </View>
            </View>
            <View style={styles.inBody1}>
              <View style={styles.pactBody}>
                <Text>Total Harga : </Text>
                <Text style={styles.text}>Rp . {this.state.price}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 30,
            }}>
            <TouchableOpacity
              style={{
                height: 50,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                width: '100%',
                borderRadius: 10,
              }}>
              <Text>Delete</Text>
            </TouchableOpacity>
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
export default connect(mapStateToProps)(DeleteId);
