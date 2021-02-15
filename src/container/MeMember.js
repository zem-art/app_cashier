import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import DataProfile from '../components/dataProfile';
import {styles} from '../styles/styleProfilM';

export class MeMember extends Component {
  render() {
    // console.log('ini Data Redux==', this.props.userData.userReducer);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>Akun Saya</Text>
          </View>
          <View style={styles.profile}>
            <TouchableOpacity style={styles.inBody}>
              <Image
                style={styles.qrCode}
                source={{uri: this.props.userData.userReducer.qrcode}}
              />
            </TouchableOpacity>
            <View style={styles.pactName}>
              <Text style={styles.textData}>
                {this.props.userData.userReducer.name}
              </Text>
              <Text style={styles.textData}>
                {this.props.userData.userReducer.number}
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <DataProfile navigation={this.props.navigation} />
          </View>
          <View style={styles.bottom} />
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
export default connect(mapStateToProps)(MeMember);
