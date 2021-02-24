import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
  StatusBar,
} from 'react-native';
import {styles} from '../styles/stylePembeli';
import axios from 'axios';
import {connect} from 'react-redux';
import Spinner from 'react-native-spinkit';

export class DataPembeli extends Component {
  constructor() {
    super();
    this.state = {
      dataGet: [],
      loading: false,
      refreash: false,
      isEror: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getData();
  }

  getData = async () => {
    this.setState({loading: true});
    try {
      await axios
        .get('https://project-mini.herokuapp.com/api/pembelian', {
          headers: {
            Authorization: `Bearer${this.props.userData.userReducer.token}`,
          },
        })
        .then((result) => {
          console.log('Succsses==', result.data);
          this.setState({
            dataGet: result.data.data,
            loading: false,
            refreash: false,
            isEror: false,
          });
        })
        .catch((err) => {
          console.log('Erroro Get Data===', err);
          this.setState({loading: false, refreash: false});
          isEror: true;
        });
    } catch (err) {
      console.log('Eroro Get Data==', err);
      this.setState({loading: false, refreash: false, isEror: true});
    }
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.isloading}>
          <Spinner color={'blue'} size={40} type="ThreeBounce" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    } else if (this.state.isEror) {
      return (
        <View style={styles.isloading}>
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
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Staf')}>
            <Image
              style={styles.back}
              source={require('../assets/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Data Pembelian</Text>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreash}
              onRefresh={() => this.onRefreash()}
            />
          }>
          <View style={styles.body}>
            {this.state.dataGet.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('DetailPembeli', {
                      item: item,
                    })
                  }
                  style={styles.inbody}>
                  <View style={styles.iinBody}>
                    <View style={styles.ininBody}>
                      <Text style={styles.colorKet}>Nama Barang : </Text>
                      <Text>{item.nama_barang} </Text>
                    </View>
                    <View style={styles.ininBody}>
                      <Text style={styles.colorKet}>Pcs :</Text>
                      <Text>{item.pcs}</Text>
                    </View>
                    <View style={styles.ininBody}>
                      <Text style={styles.colorKet}>Harga Satuan :</Text>
                      <Text>{item.harga_satuan}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
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
export default connect(mapStateToProps)(DataPembeli);
