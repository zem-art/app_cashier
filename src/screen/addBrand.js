import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleAddBrand';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import {connect} from 'react-redux';

export class AddBrand extends Component {
  constructor() {
    super();
    this.state = {
      brand: '',
      loading: false,
    };
  }

  goTo() {
    this.props.navigation.navigate('AddStock');
  }

  addBrand() {
    this.setState({loading: true});
    axios({
      url: 'https://project-mini.herokuapp.com/api/add-merek',
      method: 'POST',
      data: {
        nama_merek: this.state.brand,
      },
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
    })
      .then((result) => {
        console.log('Sucsse add==', result.data);
        ToastAndroid.show('Brand Berhasil Di Tambah Kan ', ToastAndroid.LONG);
        this.setState({loading: false});
        this.goTo();
      })
      .catch((err) => {
        console.log('Eroror Add==', err);
        ToastAndroid.show('Brand Gagal Di Tambah Kan ', ToastAndroid.LONG);
        this.setState({loading: false});
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#6495ed" />
        <View style={styles.header}>
          <Text style={styles.title}>Add Brand</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inBody}>
            <Text style={styles.text}>Enter Your Brand</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Brand"
              onChangeText={(name) => this.setState({brand: name})}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => this.addBrand()} style={styles.klik}>
            {this.state.loading ? (
              <Spinner
                style={styles.loading}
                color={'#6495ed'}
                size={25}
                type="Wave"
              />
            ) : (
              <Text style={styles.textSend}>Add</Text>
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
export default connect(mapStateToProps)(AddBrand);
