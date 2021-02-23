import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import {styles} from '../styles/styleStockG';
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export class Stock extends Component {
  constructor() {
    super();
    this.state = {
      dataGet: [],
      loading: false,
      refreash: false,
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
        .get('https://project-mini.herokuapp.com/api/barang', {
          headers: {
            Authorization: `Bearer${this.props.userData.userReducer.token}`,
          },
        })
        .then((result) => {
          this.setState({
            dataGet: result.data.data,
            loading: false,
            refreash: false,
          });
        })
        .catch((err) => {
          console.log('Eroro Get Data==', err);
          ToastAndroid.show('Maaf Terjadi Kesalahan', ToastAndroid.LONG);
          this.setState({loading: false, isEror: true, refreash: false});
        });
    } catch (err) {
      console.log('eroro Get Data', err);
      ToastAndroid.show('Maaf Terjadi Kesalahan', ToastAndroid.LONG);
      this.setState({loading: false, isEror: true, refreash: false});
    }
  };

  deleteItem() {
    axios({
      url: `https://project-mini.herokuapp.com/api/delete-barang/${this.props.route.params.item}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
    })
      .then((result) => {
        console.log('Sucsess Delet==', result.data);
        ToastAndroid.show('Item Berhasil DI Hapus', ToastAndroid.LONG);
        this.getData();
      })
      .catch((err) => {
        console.log('eroro Delete Data==', err);
      });
  }
  render() {
    // console.log('Ini Data Params==', this.props.route.params);
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
          <Text style={styles.title}>Stok Gudang</Text>
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
                <View style={styles.inbody}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Detail', {
                        item: item,
                      })
                    }
                    style={styles.Pact}>
                    <Text style={styles.colorDetail}>Detail</Text>
                  </TouchableOpacity>
                  <View style={styles.iinBody}>
                    <View style={styles.ininBody}>
                      <Text style={styles.colorKet}>Nama Barang</Text>
                      <Text>{item.nama_barang}</Text>
                    </View>
                    <View style={styles.ininBody}>
                      <Text style={styles.colorKet}>Merek</Text>
                      <Text>{item.merek}</Text>
                    </View>
                  </View>
                  <View style={styles.PactEditDelete}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Submit', {
                          item: item,
                        })
                      }
                      style={styles.Pact1}>
                      <Image
                        style={styles.delete}
                        source={require('../assets/icon/edit.png')}
                      />
                    </TouchableOpacity>
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
export default connect(mapStateToProps)(Stock);
