import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleAddSaldo';
import axios from 'axios';
import {connect} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import Spinner from 'react-native-spinkit';

export class AddSaldo extends Component {
  constructor() {
    super();
    this.state = {
      price: '',
      bank: {},
      isloading: false,
      inputBank: '',
    };
  }

  lead_To() {
    this.props.navigation.navigate('ResponM', {item: this.state.bank});
  }

  addMoney() {
    this.setState({isloading: true});
    console.log('Mulai Mengirim');
    axios({
      url: 'https://project-mini.herokuapp.com/api/payments',
      method: 'POST',
      data: {
        bank: this.state.inputBank,
        jumlah: this.state.price,
      },

      headers: {
        Authorization: `Bearer ${this.props.userData.userReducer.token}`,
      },
    })
      .then((result) => {
        console.log('Berhasil Add Saldo==', result.data.data);
        this.setState({bank: result.data.data, isloading: false});
        this.lead_To();
        ToastAndroid.show('Berhasil Menambahkan Saldo Anda', ToastAndroid.LONG);
      })
      .catch((err) => {
        console.log('Erro Add Saldo', err);
        this.setState({isloading: false});
      });
  }

  imageBank() {
    if (this.state.inputBank === 'bri') {
      return (
        <Image
          style={styles.iconBank}
          source={require('../assets/img/BRI.jpg')}
        />
      );
    } else if (this.state.inputBank === 'bni') {
      return (
        <Image
          style={styles.iconBank}
          source={require('../assets/img/BNI.jpg')}
        />
      );
    } else if (this.state.inputBank === 'bca') {
      return (
        <Image
          style={styles.iconBank}
          source={require('../assets/img/BCA.jpg')}
        />
      );
    } else {
      null;
    }
  }
  render() {
    // console.log('Ini redux==', this.props.userData.userReducer.token);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <View style={styles.header}>
          <Text style={styles.title}>Isi Saldo</Text>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.image}>{this.imageBank()}</View>
            <View style={styles.inbody}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.inputBank}
                style={styles.Picker}
                onValueChange={(itemValue) => {
                  this.setState({inputBank: itemValue});
                }}>
                <Picker.item label="Pilih Bank" value="" />
                <Picker.item label="BRI" value="bri" />
                <Picker.item label="BCA" value="bca" />
                <Picker.item label="BNI" value="bni" />
              </Picker>
              <TextInput
                onChangeText={(price) => this.setState({price: price})}
                style={styles.input}
                keyboardType="number-pad"
                placeholder="Nominal"
              />
            </View>
          </View>
          <View style={styles.pacTouchable}>
            <TouchableOpacity
              onPress={() => this.addMoney()}
              style={styles.klik}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'white'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.textSend}>Add Saldo</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.pactBack}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.klikBack}>
              <Image
                style={styles.back}
                source={require('../assets/icon/Back.png')}
              />
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

export default connect(mapStateToProps)(AddSaldo);
