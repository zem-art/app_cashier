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

export class Otp extends Component {
  constructor() {
    super();
    // const data = this.props.userData.userReducer.number;
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
    const {otp, noPhone} = this.state;
    if (otp !== '' || noPhone !== '') {
      let data = {
        kode: otp,
        nomer: noPhone,
      };
      console.log('Ini data ==', data);
      fetch('https://project-mini.herokuapp.com/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      })
        .then((responseJson) => {
          console.log('Succsess==', responseJson);
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
    } else {
      ToastAndroid.show('Kode OTP Belum Di Isi', ToastAndroid.LONG);
      this.setState({isloading: false});
    }
  }

  render() {
    console.log('Ini Data Redux===', this.props.userData.userReducer.number);
    console.log('Ini Data ===', this.props.route.params);
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
                  // value={this.props.userData.userReducer.number}
                  value={this.props.route.params.item}
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
