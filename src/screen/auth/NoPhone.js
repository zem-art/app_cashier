import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../styles/styleNoPhone';

export class NoPhone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Send No Phone</Text>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.inBody}>
              <Text>Enter Your No Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Your No Phone"
              />
            </View>
            <View style={styles.pactText}>
              <Text style={styles.caution}>Enter Your Mobile Number </Text>
              <Text style={styles.caution}>To Receive OTP From Us</Text>
            </View>
          </View>
          <View style={styles.send}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Otp')}
              style={styles.inSend}>
              <Text style={styles.textSend}>Send</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.pathBack}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
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

export default NoPhone;
