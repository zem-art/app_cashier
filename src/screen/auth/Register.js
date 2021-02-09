import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {styles} from '../../styles/styleRegister';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      mata: true,
      name: '',
      email: '',
      password: '',
      isloading: false,
    };
  }
  changeEye = () => {
    const eyes = !this.state.mata;
    this.setState({mata: eyes});
  };
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
              />
            </View>
            <Text>Name :</Text>
            <View style={styles.inAccount}>
              <Image
                style={[styles.pass1, {height: 30}]}
                source={require('../../assets/icon/signUP.png')}
              />
              <TextInput style={styles.input} placeholder="Enter Your Name" />
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
            <TouchableOpacity style={styles.inBottom1}>
              <Text style={styles.textLogin}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Register}>
            <Text>You Already Have An Account ? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.textRegister}> Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Register;
