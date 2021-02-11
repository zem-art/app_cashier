import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import {styles} from '../../styles/styleNoPhone';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import {connect} from 'react-redux';

export class NoPhone extends Component {
  constructor() {
    super();
    this.state = {
      NoPhone: '',
      isloading: false,
    };
  }

  lead_To() {
    this.props.navigation.navigate('Otp');
  }

  sendNumber() {
    this.setState({isloading: true});
    try {
      axios
        .post('https://project-mini.herokuapp.com/api/resend', {
          nomor: this.state.NoPhone,
        })
        .then((responseJson) => {
          console.log('Berhasil===', responseJson.data);
          ToastAndroid.show(
            'Permintaan Anda Berhasil Di Kirim',
            ToastAndroid.LONG,
          );
          this.lead_To();
          const {data} = responseJson.data;
          this.props.numberUser(data);
          this.setState({isloading: false});
        })
        .catch((err) => {
          console.log('Eror===', err);
          ToastAndroid.show('No Phone Tidak Di Temukan', ToastAndroid.LONG);
          this.setState({isloading: false});
        });
    } catch (err) {
      console.log(err);
      this.setState({isloading: false});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <View style={styles.header}>
          <Text style={styles.title}>Send Phone Number</Text>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.inBody}>
              <Text>Enter Your Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Phone Number"
                onChangeText={(number) => this.setState({NoPhone: number})}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.pactText}>
              <Text style={styles.caution}>Enter Your Mobile Number </Text>
              <Text style={styles.caution}>To Receive OTP From Us</Text>
            </View>
          </View>
          <View style={styles.send}>
            <TouchableOpacity
              onPress={() => this.sendNumber()}
              style={styles.inSend}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'#FFFFFF'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.textSend}>Send</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.pathBack}>
          <TouchableOpacity
            style={styles.klik}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../../assets/icon/Back.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    numberUser: (data) => dispatch({type: 'SET_NUMBER', payload: data}),
  };
};

export default connect(null, mapDispatchToProps)(NoPhone);

// onValueChange={(itemValue) => {
//   if (itemValue === 'add') {
//     munculin Modal
//   } else {
//     this.setState({inputCategory: itemValue});
//   }
// }}

// kitabuatstatisuntukvaluenya
// Picker.item label="Tambah_Barang" value="add"
