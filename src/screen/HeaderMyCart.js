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
      id: item.id,
      data: [],
      name: item.nama_barang,
      price: item.total_harga,
      disc: item.diskon,
      satuan: item.harga_satuan,
    };
  }

  goTo() {
    this.props.navigation.navigate('Cashier');
  }

  DeleteItem = async () => {
    this.setState({loading: true});
    try {
      axios
        .delete(
          `https://project-mini.herokuapp.com/api/hapus/keranjang/${this.state.id}`,
          {
            headers: {
              Authorization: `Bearer${this.props.userData.userReducer.token}`,
            },
          },
        )
        .then((result) => {
          console.log('Sucsse==', result.data);
          this.setState({loading: false});
          ToastAndroid.show(result.data.message, ToastAndroid.LONG);
          this.goTo();
        })
        .catch((err) => {
          console.log('Eororo Delet==', err);
          this.setState({loading: false});
        });
    } catch (err) {
      console.log('eroror', err);
      this.setState({loading: false});
    }
  };

  Question = () => {
    Alert.alert(
      'Confirmation',
      'Mau Menghapus Produk Ini Dari Keranjang',
      [
        {
          text: 'No',
          onPress: () => ToastAndroid.show('Delete Cancel', ToastAndroid.LONG),
        },
        {
          text: 'Yes',
          onPress: () => this.DeleteItem(),
          // ToastAndroid.show('User Route Yes', ToastAndroid.LONG),
        },
      ],
      {cancelable: false},
    );
  };

  render() {
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
          <View style={styles.pactKlik}>
            <TouchableOpacity
              onPress={() => this.Question()}
              style={styles.inKlik}>
              <Text style={styles.textSend}>Delete</Text>
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
