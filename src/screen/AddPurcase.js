import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import {styles} from '../styles/styleAllBos';
import {connect} from 'react-redux';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export class AddPurcase extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      to: new Date().toISOString().substr(0, 10),
      from: new Date(new Date().setDate(new Date().getDate() - 31))
        .toISOString()
        .substr(0, 10),
      loading: false,
    };
  }

  postDate = async () => {
    this.setState({loading: true});
    axios({
      url: 'https://project-mini.herokuapp.com/api/laporan-pembelian',
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
      data: {
        tAwal: this.state.from,
        tAkhir: this.state.to,
      },
    })
      .then((result) => {
        console.log('Succsse==', result.data);
        this.setState({loading: false, data: result.data.data});
      })
      .catch((err) => {
        console.log('ERororor==', err);
        this.setState({data: [], loading: false});
        ToastAndroid.show(
          'Maaf Permintaan Anda Tidak Di Temukan',
          ToastAndroid.LONG,
        );
      });
  };

  render() {
    const sekarang = new Date().toISOString().substr(0, 10);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.icon}
              source={require('../assets/icon/back.png')}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Laporan Pembeli</Text>
        </View>
        <View style={styles.date}>
          <View style={styles.inDate}>
            <Text style={styles.text1}>Dari Tanggal</Text>
            <DatePicker
              date={this.state.from}
              mode="date"
              format="YYYY-MM-DD"
              showIcon={false}
              maxDate={sekarang}
              onDateChange={(dari) => this.setState({from: dari})}
            />
          </View>
          <View style={styles.inDate}>
            <Text style={styles.text2}>Sampai Tanggal</Text>
            <DatePicker
              date={this.state.to}
              mode="date"
              format="YYYY-MM-DD"
              showIcon={false}
              maxDate={sekarang}
              onDateChange={(toDate) => this.setState({to: toDate})}
            />
          </View>
        </View>
        <ScrollView style={styles.body}>
          {this.state.data.map((i) => {
            return (
              <View style={styles.inbody}>
                <View style={styles.pactName}>
                  <Text style={styles.text}>Nama Barang</Text>
                  <Text>{i.nama_barang} </Text>
                </View>
                <View style={styles.pactName}>
                  <Text style={styles.text}>Nama Supplaier</Text>
                  <Text>{i.supplier} </Text>
                </View>
                <View style={styles.data}>
                  <View style={styles.inData}>
                    <Text style={styles.textStock}>Stok</Text>
                    <Text>{i.pcs} Pcs</Text>
                  </View>
                  <View style={styles.inData}>
                    <Text style={styles.textStock}>Harga Satuan</Text>
                    <Text>Rp . {i.harga_satuan}</Text>
                  </View>
                  <View style={styles.inData}>
                    <Text style={styles.textStock}>Jumlah Harga</Text>
                    <Text>Rp . {i.total_harga}</Text>
                  </View>
                </View>
                <View style={styles.pactName}>
                  <Text style={styles.text}>Create</Text>
                  <Text>{i.created_at}</Text>
                </View>
                <View style={styles.pactName}>
                  <Text style={styles.text}>Update</Text>
                  <Text>{i.updated_at}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.pactKlik}>
          <TouchableOpacity style={styles.klik} onPress={() => this.postDate()}>
            {this.state.loading ? (
              <Spinner color={'#29abe2'} size={25} type="Wave" />
            ) : (
              <Text style={styles.textSend}>Done</Text>
            )}
          </TouchableOpacity>
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
export default connect(mapStateToProps)(AddPurcase);
