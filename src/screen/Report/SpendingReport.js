import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  StatusBar,
  Modal,
} from 'react-native';
import {styles} from '../../styles/styleAllBos';
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import {Picker} from '@react-native-picker/picker';

export class Spending extends Component {
  constructor() {
    super();
    this.state = {
      response: {},
      loading: false,
      inputDate: '',
      data: false,
    };
  }

  postDate = async () => {
    this.setState({loading: true});
    axios({
      url: 'https://project-mini.herokuapp.com/api/laporan-pengeluaran',
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
      data: {
        bulan: this.state.inputDate,
      },
    })
      .then((result) => {
        console.log('Suscsse==', result.data);
        this.setState({loading: false, response: result.data});
        ToastAndroid.show(
          'Permintaan Anda Berhasil Di Proses',
          ToastAndroid.LONG,
        );
        this.openModal();
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

  openModal() {
    this.setState({data: true});
  }

  closeModal() {
    this.setState({data: false});
  }
  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header1}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.icon}
              source={require('../../assets/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Laporan Pengeluaran</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddSpending')}>
            <Image
              style={styles.icon1}
              source={require('../../assets/icon/addReport.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.data1}>
          <Picker
            mode="dropdown"
            selectedValue={this.state.inputDate}
            style={styles.Picker}
            onValueChange={(itemValue) => {
              this.setState({inputDate: itemValue});
            }}>
            <Picker.item label="Pilih Bulan" value="0" />
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
                <View style={styles.inbody2}>
                  <View style={styles.pactName}>
                    <Text style={styles.text}>Nama Pengeluaran</Text>
                    <Text>{i.nama_pengeluaran} </Text>
                  </View>
                  <View style={styles.pactName}>
                    <Text style={styles.text}>Jumlah</Text>
                    <Text>Rp . {i.jumlah} </Text>
                  </View>
                  <View style={styles.pactName}>
                    <Text style={styles.text}>Create</Text>
                    <Text>{i.created_at}</Text>
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
        <Modal transparent={true} animationType="slide" visible={data}>
          <View style={styles.Modal}>
            <TouchableOpacity
              onPress={() => this.closeModal()}
              style={styles.UpModal}
            />
            <View style={styles.bottomData}>
              <View style={styles.inBottomModal}>
                <Text style={styles.titleM}>Total Pengeluaran</Text>
                <View style={styles.inModalData}>
                  <Text>Pengeluaran Harian :</Text>
                  <Text>
                    Rp . {JSON.stringify(this.state.response.pengeluaran_hari)}
                  </Text>
                </View>
                <View style={styles.inModalData}>
                  <Text>Pengeluaran Bulan :</Text>
                  <Text>
                    Rp . {JSON.stringify(this.state.response.pengeluaran_bulan)}
                  </Text>
                </View>
              </View>
              <View style={styles.pactModalKlik}>
                <TouchableOpacity
                  onPress={() => this.closeModal()}
                  style={styles.klikM}>
                  <Text style={styles.textSend}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};
export default connect(mapStateToProps)(Spending);
