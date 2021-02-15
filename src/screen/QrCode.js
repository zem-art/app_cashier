import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from '../styles/styleQrCode';
import {connect} from 'react-redux';

export class QrCode extends Component {
  render() {
    // console.log('Redux==', this.props.userData.userReducer);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Kode Unix</Text>
        </View>
        <View style={styles.kode}>
          <Text style={styles.textKode}>
            {this.props.userData.userReducer.kode}
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.qrcode}>
            <Image
              style={styles.icon}
              source={{uri: this.props.userData.userReducer.qrcode}}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};
export default connect(mapStateToProps)(QrCode);
