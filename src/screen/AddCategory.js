import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import {connect} from 'react-redux';
import {styles} from '../styles/styleAddBrand';

export class AddCategory extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      loading: false,
    };
  }

  goTo() {
    this.props.navigation.navigate('Staf');
  }

  addBrand() {
    this.setState({loading: true});
    axios({
      url: 'https://project-mini.herokuapp.com/api/add-kategori',
      method: 'POST',
      data: {
        nama_kategori: this.state.category,
      },
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
    })
      .then((result) => {
        console.log('Sucsse add==', result.data);
        ToastAndroid.show('Category Berhasil Di TambahKan ', ToastAndroid.LONG);
        this.setState({loading: false});
        this.goTo();
      })
      .catch((err) => {
        console.log('Eroror Add==', err);
        ToastAndroid.show('Category Gagal Di TambahKan ', ToastAndroid.LONG);
        this.setState({loading: false});
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#6495ed" />
        <View style={styles.header}>
          <Text style={styles.title}>Add Category</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inBody}>
            <Text style={styles.text}>Enter The Category You Like</Text>
            <TextInput
              style={styles.input}
              placeholder="Insert Here"
              onChangeText={(name) => this.setState({category: name})}
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
export default connect(mapStateToProps)(AddCategory);
