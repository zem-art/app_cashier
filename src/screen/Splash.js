import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {styles} from '../styles/styleSplash';
import LottieView from 'lottie-react-native';
import Spinner from 'react-native-spinkit';

export class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <View style={styles.pactIcon}>
          <LottieView
            source={require('../assets/animation/Splash.json')}
            style={styles.icon}
            autoPlay
            loop
          />
        </View>
        <Spinner style={styles.loading} color={'white'} size={25} type="Wave" />
        <View style={styles.version}>
          <Text style={styles.textVersion}>V : 1.0</Text>
        </View>
      </View>
    );
  }
}

export default Splash;
