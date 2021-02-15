import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import DataProfile from '../components/dataProfile';
import {styles} from '../styles/styleProfilM';

export class MeMember extends Component {
  constructor() {
    super();
    this.state = {
      saldo: '',
      refreash: false,
    };
  }

  componentDidMount() {
    this.getSaldo();
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getSaldo();
  }

  getSaldo = async () => {
    try {
      await axios
        .get('https://project-mini.herokuapp.com/api/saldo', {
          headers: {
            Authorization: `token ${this.props.userData.userReducer.token}`,
          },
        })
        .then((result) => {
          console.log('Berhasil Get==', result.data);
          this.setState({
            saldo: result.data.data,
            refreash: false,
          });
        })
        .catch((err) => {
          console.log('Eror Get Saldooo==', err);
          ToastAndroid.show('Eroro Get Saldo', ToastAndroid.LONG);
          this.setState({
            refreash: false,
          });
        });
    } catch (err) {
      console.log('Eroro Get Saldo==', err);
      this.setState({
        refreash: false,
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreash}
              onRefresh={() => this.onRefreash()}
            />
          }>
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
          <View style={styles.saldo}>
            <Text style={styles.textSaldo}>Saldo : </Text>
            <Text style={styles.textSaldo}>{this.state.saldo}</Text>
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
