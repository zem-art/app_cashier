import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../styles/styleSupllier';
import {connect} from 'react-redux';
import axios from 'axios';

export class AddSupllaier extends Component {
  constructor() {
    super();
    this.state = {
      company: '',
      loading: false,
    };
  }

  goTo() {
    this.props.navigation.navigate('AddBuyer');
  }

  addSuplleir = async () => {
    await axios({
      url: 'https://project-mini.herokuapp.com/api/add-supplier',
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
      data: {
        nama_supplier: this.state.company,
      },
    })
      .then((result) => {
        console.log('Sucsess Add==', result.data);
        this.setState({loading: false});
        ToastAndroid.show('Berhasil Menambahkan Perusaahaa', ToastAndroid.LONG);
        this.goTo();
      })
      .catch((err) => {
        console.log('Eroror Add==', err);
        this.setState({loading: false});
        ToastAndroid.show('Eror Add Company', ToastAndroid.LONG);
      });
  };
  render() {
    console.log(this.props.userData.userReducer.token);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <Text style={styles.title}>Add Supllaier</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inbody}>
            <Text style={styles.textSupllaier}>Nama Supllaier</Text>
            <TextInput
              multiline={true}
              style={styles.input}
              placeholder="Nama Perusahaan"
              onChangeText={(company) => this.setState({company: company})}
            />
          </View>
        </View>
        <View style={styles.pactKlik}>
          <TouchableOpacity
            onPress={() => this.addSuplleir()}
            style={styles.klik}>
            <Text style={styles.textKlik}>Submit</Text>
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
export default connect(mapStateToProps)(AddSupllaier);
