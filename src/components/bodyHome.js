import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import {styles} from '../styles/styleHomeM';
import {connect} from 'react-redux';

export class Body extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isloading: true,
      isEror: false,
      refreash: false,
    };
  }

  componentDidMount() {
    this.getHistory();
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getHistory();
  }

  getHistory = async () => {
    try {
      await axios
        .get('https://project-mini.herokuapp.com/api/transaksi', {
          headers: {
            Authorization: `Bearer${this.props.userData.userReducer.token}`,
          },
        })
        .then((result) => {
          console.log('Ini data==', result.data.data);
          this.setState({
            data: result.data.data,
            isloading: false,
            refreash: false,
          });
        })
        .catch((err) => {
          console.log('Eror Get Data===', err);
          this.setState({isloading: false, isEror: true, refreash: false});
        });
    } catch (err) {
      console.log('Eroro Get Data==', err);
      this.setState({isloading: false, isEror: false, refreash: false});
    }
  };
  render() {
    if (this.state.isloading) {
      return (
        <View style={styles.Loading1}>
          <Spinner color={'blue'} size={40} type="ThreeBounce" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    } else if (this.state.isEror) {
      return (
        <View style={styles.Loading1}>
          <Text>Maaf Terjadi Eror Saat Memuat Data</Text>
          <Text>Dan Kesalahan Dari Kami Bukan Dari Anda</Text>
          <TouchableOpacity
            style={styles.toc}
            onPress={() => this.onRefreash()}>
            <Text>Klik Me Untuk refreash</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <>
        {this.state.data.map((item, value) => {
          return (
            <View style={styles.inBody}>
              <View style={styles.History}>
                <Text>Bank : {item.bank}</Text>
                <View style={styles.pactPrice}>
                  <Text>Price : </Text>
                  <Text style={styles.textPrice}>{item.jumlah}</Text>
                </View>
              </View>
              <View style={styles.pactDate}>
                <Text>Date</Text>
                <Text style={styles.textDate}>{item.created_at}</Text>
              </View>
            </View>
          );
        })}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};
export default connect(mapStateToProps)(Body);
