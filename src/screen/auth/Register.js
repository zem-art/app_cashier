import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {styles} from '../../styles/styleRegister';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import {connect} from 'react-redux';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      mata: true,
      noPhone: '',
      name: '',
      password: '',
      isloading: false,
    };
  }
  changeEye = () => {
    const eyes = !this.state.mata;
    this.setState({mata: eyes});
  };

  lead_To() {
    this.props.navigation.navigate('Otp');
  }

  userRegister() {
    this.setState({isloading: true});
    axios({
      url: 'https://project-mini.herokuapp.com/api/register',
      method: 'POST',
      data: {
        nomor: this.state.noPhone,
        nama: this.state.name,
        password: this.state.password,
      },
    })
      .then((responseJson) => {
        const {token} = responseJson.data;
        console.log('Ini Data====', responseJson.data);
        const {data} = responseJson.data;
        this.props.numberUser(data);
        if (token === token) {
          ToastAndroid.show(
            'Akun Berhasil Mendaftar Daftar',
            ToastAndroid.LONG,
          );
        }
        this.lead_To();
        this.setState({
          isloading: false,
          noPhone: '',
          name: '',
          password: '',
        });
      })
      .catch((err) => {
        if (err.response) {
          ToastAndroid.show('Maaf Data Harus Di isi', ToastAndroid.LONG);
          console.log('EROROROROROR =====', err.response.data);
          this.setState({
            isloading: false,
          });
        } else {
          ToastAndroid.show(
            'Maaf Ada Kesalahan Yang Berasal Dari Kami',
            ToastAndroid.LONG,
          );
          this.setState({
            isloading: false,
          });
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#585aa7ff" />
        <View style={styles.header}>
          <Text style={styles.textLogin}>Sign Up</Text>
        </View>
        <View style={styles.pactImage}>
          <Image
            style={styles.icon}
            source={require('../../assets/img/Register.png')}
          />
        </View>
        <ScrollView>
          <View style={styles.pactAccount}>
            <Text>No Phone :</Text>
            <View style={styles.inAccount}>
              <Image
                style={styles.pass2}
                source={require('../../assets/icon/Phone.png')}
              />
              <TextInput
                keyboardType="number-pad"
                style={styles.input}
                placeholder="Please Enter +62 in Front"
                onChangeText={(number) => this.setState({noPhone: number})}
              />
            </View>
            <Text>Name :</Text>
            <View style={styles.inAccount}>
              <Image
                style={[styles.pass1, {height: 30}]}
                source={require('../../assets/icon/signUP.png')}
              />
              <TextInput
                onChangeText={(name) => this.setState({name: name})}
                style={styles.input}
                placeholder="Enter Your Name"
              />
            </View>
            <Text>Password :</Text>
            <View style={styles.inAccount}>
              <Image
                style={styles.pass}
                source={require('../../assets/icon/pass.png')}
              />
              <TextInput
                secureTextEntry={this.state.mata}
                style={styles.input}
                placeholder="Enter Your Password"
                onChangeText={(password) => this.setState({password: password})}
              />
              <TouchableOpacity
                onPress={() => this.changeEye()}
                style={styles.pathEye}>
                <Image
                  style={styles.eye}
                  source={
                    this.state.mata
                      ? require('../../assets/icon/hidenEye.png')
                      : require('../../assets/icon/openEyes.png')
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Bootom}>
            <TouchableOpacity
              style={styles.Register}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.textRegister}> Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.userRegister()}
              style={styles.inBottom1}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'white'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.textLogin}>Sign Up</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.textBootom}>
              We Will Protect Your Privacy Completely
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    numberUser: (data) => dispatch({type: 'SET_NUMBER', payload: data}),
  };
};

export default connect(null, mapDispatchToProps)(Register);
