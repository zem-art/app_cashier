import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styleHomestaf';
import {connect} from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-spinkit';

export class ProfileAdmin extends Component {
  constructor() {
    super();
    this.state = {
      isloading: true,
      data: {},
    };
  }

  componentDidMount() {
    this.getProfil();
  }

  getProfil = async () => {
    try {
      await axios
        .get('https://project-mini.herokuapp.com/api/profile', {
          headers: {
            Authorization: `Bearer${this.props.userData.userReducer.token}`,
          },
        })
        .then((result) => {
          console.log('Sucsess Get Profile==', result.data.data);
          const {id} = result.data.data;
          const {avatar} = result.data.data;
          const {email} = result.data.data;
          this.props.userImage(avatar);
          this.props.userId(id);
          this.props.userEmail(email);
          const Image_key = ['image', avatar];
          const Id_key = ['id', JSON.stringify(id)];
          const email_Key = ['email', email];
          AsyncStorage.multiSet([Image_key, Id_key, email_Key]).then(
            (value) => {
              this.setState({
                Image_key: value,
                Id_key: value,
                email_Key: value,
              });
            },
          );
          this.setState({data: result.data.data});
          this.setState({isloading: false, refreash: false});
        })
        .catch((err) => {
          console.log('Eroro Get Profile==', err);
          this.setState({isloading: false, refreash: false});
        });
    } catch (err) {
      console.log('Eroror Get Profil==', err);
      this.setState({isloading: false, refreash: false});
    }
  };
  render() {
    if (this.state.isloading) {
      return (
        <View style={styles.loading}>
          <Spinner color={'blue'} size={40} type="ThreeBounce" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    }
    console.log(this.props.userData.userReducer);
    return (
      <>
        <View style={styles.icon}>
          <Image
            style={styles.iconProfil}
            source={{uri: this.props.userData.userReducer.image}}
          />
        </View>
        <Text>{this.props.userData.userReducer.email}</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Edit Profil', {
              item: this.state.data,
            })
          }
          style={styles.icon}>
          <Image
            style={styles.iconGo}
            source={require('../assets/icon/edit.png')}
          />
        </TouchableOpacity>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userId: (id) => dispatch({type: 'SET_ID', payload: id}),
    userImage: (avatar) => dispatch({type: 'SET_IMAGE', payload: avatar}),
    userEmail: (email) => dispatch({type: 'SET_EMAIL', payload: email}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileAdmin);
