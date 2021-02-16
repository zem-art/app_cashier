import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ToastAndroid,
} from 'react-native';
import {styles} from '../../styles/styleForgot';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export class Forgot extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      isloading: false,
    };
  }

  goTO() {
    this.props.navigation.navigate('Succses');
  }

  sendSms = async () => {
    this.setState({isloading: true});
    try {
      await axios
        .post('https://project-mini.herokuapp.com/api/forgot-password', {
          nomor: this.state.number,
        })
        .then((result) => {
          console.log('Succses Send==', result.data);
          ToastAndroid.show('Permintaan Berhasil Terkirim', ToastAndroid.LONG);
          this.setState({isloading: false, number: ''});
        })
        .catch((err) => {
          console.log('Eroro Send Data', err);
          ToastAndroid.show('Tolong Masukan No Telepon', ToastAndroid.LONG);
          this.setState({isloading: false});
        });
    } catch (err) {
      console.log('Erro Not Send Passwor', err);
      this.setState({isloading: false});
      ToastAndroid.show('Perimnatan Anda Tidak Terkirim', ToastAndroid.LONG);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#6495ed" />
        <View style={styles.header}>
          <Text style={styles.title}>Forgot Password</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inBody}>
            <Text style={styles.text}>Enter Your Number Phone</Text>
            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              placeholder="Enter Your Number Phone"
              onChangeText={(number) => this.setState({number: number})}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => this.sendSms()} style={styles.klik}>
            {this.state.isloading ? (
              <Spinner
                style={styles.loading}
                color={'#6495ed'}
                size={25}
                type="Wave"
              />
            ) : (
              <>
                <Text style={styles.textSend}>Send</Text>
                <Image
                  style={styles.icon}
                  source={require('../../assets/icon/send.png')}
                />
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Forgot;
