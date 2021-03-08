import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import {styles} from '../../styles/styleAllBos';
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import {Picker} from '@react-native-picker/picker';

export class MountAbsensi extends Component {
  constructor() {
    super();
    this.state = {
      response: [],
      loading: false,
      inputDate: '',
    };
  }

  postDate = async () => {
    this.setState({loading: true});
    axios({
      url: 'https://project-mini.herokuapp.com/api/absen-bulanan',
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
      data: {
        bulan: this.state.inputDate,
      },
    })
      .then((result) => {
        console.log('Suscsse==', result.data.data);
        this.setState({loading: false, response: result.data});
        ToastAndroid.show(
          'Permintaan Anda Berhasil Di Proses',
          ToastAndroid.LONG,
        );
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
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header1}>
          <Text style={styles.title}>Absensi Bulanan</Text>
        </View>
        <View style={styles.data1}>
          <Picker
            mode="dropdown"
            selectedValue={this.state.inputDate}
            style={styles.Picker}
            onValueChange={(itemValue) => {
              this.setState({inputDate: itemValue});
            }}>
            <Picker.item label="Pilih Bulan" value="" />
            <Picker.item label="Januari" value="1" />
            <Picker.item label="February" value="2" />
            <Picker.item label="March" value="3" />
            <Picker.item label="April" value="4" />
            <Picker.item label="May" value="5" />
            <Picker.item label="June" value="6" />
            <Picker.item label="July" value="7" />
            <Picker.item label="August" value="8" />
            <Picker.item label="September" value="9" />
            <Picker.item label="Oktober" value="10" />
            <Picker.item label="November" value="11" />
            <Picker.item label="December" value="12" />
          </Picker>
        </View>
        <ScrollView style={styles.body}>
          {this.state.response.data !== undefined && // Jika Data Nya Engg Ada / undifen Maka Tidak Di tampilkan
            this.state.response.data.map((i) => {
              return (
                <View style={styles.inbody3}>
                  <View style={styles.pactName1}>
                    <Text style={styles.text3}>Nama : </Text>
                    <Text>{i.nama}</Text>
                  </View>
                  <View style={styles.pactName1}>
                    <Text style={styles.text3}>Jabatan : </Text>
                    <Text>{i.role}</Text>
                  </View>
                  <View style={styles.pactData}>
                    <View style={styles.data2}>
                      <Text style={styles.text3}>Via</Text>
                      <Text>{i.device}</Text>
                    </View>
                    <View style={styles.data2}>
                      <Text style={styles.text3}>Status</Text>
                      <Text>{i.activity}</Text>
                    </View>
                  </View>
                  <View style={styles.pactName1}>
                    <Text style={styles.text3}>Date : </Text>
                    <Text>{i.created_at}</Text>
                  </View>
                  <View style={styles.pactName1}>
                    <Text style={styles.text3}>Di Perbarui : </Text>
                    <Text>{i.updated_at}</Text>
                  </View>
                  <View style={styles.catatan}>
                    <Text style={styles.text3}>Catatan : </Text>
                    <Text>{i.pesan}</Text>
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
export default connect(mapStateToProps)(MountAbsensi);
