import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import BottomHeaderM from '../components/BottomHeaderM';
import HeaderUpM from '../components/headerUpM';
import {styles} from '../styles/styleHomeM';
import axios from 'axios';
import {connect} from 'react-redux';
import Spinner from 'react-native-spinkit';

class HomeM extends Component {
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
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreash}
              onRefresh={() => this.onRefreash()}
            />
          }>
          <HeaderUpM navigation={this.props.navigation} />
          <BottomHeaderM navigation={this.props.navigation} />
          <View style={styles.pactHistory}>
            <Text style={styles.text}>History</Text>
            <TouchableOpacity style={styles.Seeklik}>
              <Text style={styles.see}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
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
export default connect(mapStateToProps)(HomeM);
