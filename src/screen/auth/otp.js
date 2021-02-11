import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {styles} from '../../styles/styleOtp';
import LottieView from 'lottie-react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-spinkit';
import axios from 'axios';

export class Otp extends Component {
  constructor() {
    super();
    // const data = this.props.userData.userReducer;
    this.state = {
      noPhone: '',
      otp: '',
      isloading: false,
    };
  }

  lead_To() {
    this.props.navigation.navigate('Login');
  }

  sendOTp() {
    this.setState({isloading: true});
    try {
      axios
        .post('https://project-mini.herokuapp.com/api/verify', {
          kode: this.state.otp,
          nomor: this.state.noPhone,
        })
        .then((result) => {
          console.log('Succsess==', result.data);
          ToastAndroid.show('Kode OTP Anda Benar', ToastAndroid.LONG);
          this.lead_To();
          this.setState({
            isloading: false,
          });
        })
        .catch((err) => {
          console.log('Eroro==', err);
          ToastAndroid.show('Kode OTP Salah', ToastAndroid.LONG);
          this.setState({
            isloading: false,
          });
        });
    } catch {
      ToastAndroid.show('Kode OTP Belum Di Isi', ToastAndroid.LONG);
      this.setState({isloading: false});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#00D380" />
        <View style={styles.header}>
          <Text style={styles.title}> Verification Otp </Text>
        </View>
        <View style={styles.image}>
          <LottieView
            source={require('../../assets/animation/OTP.json')}
            style={styles.icon}
            autoPlay
            loop
          />
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.pactInput}>
              <View style={styles.inInput}>
                <TextInput
                  style={styles.input}
                  keyboardType="number-pad"
                  placeholder="Ex : 0***"
                  onChangeText={(otp) => this.setState({otp: otp})}
                />
                <TextInput
                  style={styles.input1}
                  placeholder="No Phone"
                  keyboardType="number-pad"
                  value={this.state.noPhone}
                  onChangeText={(number) => this.setState({noPhone: number})}
                />
              </View>
            </View>
          </View>
          <View style={styles.pactKlik}>
            <TouchableOpacity
              onPress={() => this.sendOTp()}
              style={styles.klik}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'#00D380'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.textSend}>Send</Text>
              )}
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

export default connect(mapStateToProps)(Otp);
