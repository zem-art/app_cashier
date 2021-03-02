import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {styles} from '../styles/styleAddCart';
import Spinner from 'react-native-spinkit';
import {connect} from 'react-redux';
import axios from 'axios';

export class AddCart extends Component {
  constructor() {
    super();
    this.state = {
      isloading: false,
      kode: '',
      price: '',
      unix: '',
    };
  }

  routesGoto = () => {
    Alert.alert(
      'Mau Menambah Kan Barang',
      'Selection',
      [
        {
          text: 'No',
          onPress: () => this.props.navigation.navigate('Cart'),
          // ToastAndroid.show('User Route No', ToastAndroid.LONG),
        },
        {
          text: 'Yes',
          onPress: () => this.props.navigation.navigate('AddCart'),
          // ToastAndroid.show('User Route Yes', ToastAndroid.LONG),
        },
      ],
      {cancelable: false},
    );
  };

  clear() {
    this.setState({kode: '', price: '', unix: ''});
  }

  addCart() {
    this.setState({isloading: true});
    axios({
      url: 'https://project-mini.herokuapp.com/api/add-keranjang',
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
      data: {
        uid: this.state.kode,
        pcs: this.state.price,
        kode_member: this.state.unix,
      },
    })
      .then((result) => {
        console.log('Sucsses==', result.data);
        this.setState({isloading: false});
        this.clear();
        this.routesGoto();
      })
      .catch((err) => {
        console.log('Erororo== ', err);
        this.setState({isloading: false});
      });
  }
  render() {
    // console.log('Ini==', this.props.route.params);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <View style={styles.inHader}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={styles.icon}
                source={require('../assets/icon/back.png')}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Add Cart</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Cart')}>
            <Image
              style={styles.icon}
              source={require('../assets/icon/getCart.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.inbody}>
              <Text>Kode Barang</Text>
              <View style={styles.pactInput}>
                <TextInput
                  keyboardType="number-pad"
                  style={styles.input1}
                  placeholder="Kode Barang"
                  value={
                    !this.props.route.params
                      ? this.state.kode
                      : this.props.route.params.item
                  }
                  onChangeText={(kode) => this.setState({kode: kode})}
                />
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('InAdd')}>
                  <Image
                    style={styles.icon}
                    source={require('../assets/icon/scan.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inbody}>
              <Text>Price</Text>
              <TextInput
                keyboardType="number-pad"
                style={styles.input}
                placeholder="Jumlah"
                onChangeText={(jumlah) => this.setState({price: jumlah})}
                value={this.state.price}
              />
            </View>
            <View style={styles.inbody}>
              <Text>Kode Member</Text>
              <TextInput
                keyboardType="number-pad"
                style={styles.input}
                placeholder="Kode Unix"
                onChangeText={(unik) => this.setState({unix: unik})}
                value={this.state.unix}
              />
              <Text style={styles.textLitle}>
                *Kode Member Tidak Harus Di Isi
              </Text>
            </View>
          </View>
          <View style={styles.klik}>
            <TouchableOpacity
              onPress={() => this.addCart()}
              style={styles.pactKlik}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'#ffff'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.textBottom}>Buy</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.bottom} />
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
export default connect(mapStateToProps)(AddCart);
