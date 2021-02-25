import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from '../styles/styleSucsseTop';

export class SucssesTopUp extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      price: item.data,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <Text style={styles.title}>Berhasil</Text>
          <Text style={styles.title}>Melakukan Top Up Saldo</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inbody}>
            <LottieView
              source={require('../assets/animation/Sucsse.json')}
              style={styles.icon}
              autoPlay
              loop
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.pactText}>
            <Text style={styles.textq}>Anda Berhasil Melakukan</Text>
            <Text style={styles.textq}>Top Up Sebesar :</Text>
          </View>
          <View style={styles.inBottom}>
            <Text>Rp . </Text>
            <Text>{this.state.price}</Text>
          </View>
          <View style={styles.pactKlik}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Cashier')}
              style={styles.inKlik}>
              <Text style={styles.text}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SucssesTopUp;
