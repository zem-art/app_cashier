import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  StatusBar,
  Image,
} from 'react-native';
import {styles} from '../styles/styleProfil';
import {launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';
import Spinner from 'react-native-spinkit';
import AsyncStorage from '@react-native-community/async-storage';

export class ProfileStaf extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      name: item.nama,
      age: JSON.stringify(item.umur),
      address: item.alamat,
      image: {uri: item.avatar},
      uri: item.avatar,
      srcImage: '',
      filename: '',
      isloading: false,
    };
  }

  setPhoto() {
    const options = {
      noData: true,
      title: 'Take Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        ToastAndroid.show('User Cancel ', ToastAndroid.LONG);
      } else if (response.eror) {
        console.log('Image Picker Eror', response.eror);
      } else if (response.costumeBottom) {
        console.log('User Tapped costume bottom', response.costumeBottom);
      } else {
        console.log('Response Image Picker , and file name', response.fileName);
        this.setState({
          srcImage: {uri: response.uri},
          uri: response.uri,
          filename: response.fileName,
        });
      }
    });
  }

  goTo() {
    this.props.navigation.navigate('Profile');
  }

  sendData() {
    this.setState({isloading: true});
    let data = {
      nama: this.state.name,
      umur: this.state.age,
      alamat: this.state.address,
    };
    const add = new FormData();
    add.append('avatar', {
      uri: this.state.uri,
      type: 'image/jpeg',
      name: this.state.filename,
    });
    for (var key in data) {
      add.append(key.toString(), data[key]);
    }
    console.log('Ini Data Compile', add);
    fetch('https://project-mini.herokuapp.com/api/update-profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
        Accept: 'application/json',
      },
      body: add,
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const {avatar} = result.data;
        this.props.userImage(avatar);
        this.setState({isloading: false});
        const Image_key = ['image', avatar];
        AsyncStorage.multiSet([Image_key]).then((value) => {
          this.setState({Image_key: value});
        });
        console.log('++===Done Save==++');
        this.goTo();
        ToastAndroid.show('Sucsse Update Profil', ToastAndroid.LONG);
      })
      .catch((err) => {
        console.log('Eroror Post Data==', err);
        this.setState({isloading: false});
        ToastAndroid.show('Tolong Ganti Foto Anda', ToastAndroid.LONG);
      });
  }

  render() {
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
          <Text style={styles.title}>Account</Text>
        </View>
        <ScrollView>
          <View style={styles.profil}>
            <TouchableOpacity
              onPress={() => this.setPhoto()}
              style={styles.avatar}>
              <Image style={styles.profile} source={{uri: this.state.uri}} />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <View style={styles.inbody}>
              <Text>Name</Text>
              <TextInput
                value={this.state.name}
                style={styles.input}
                placeholder="Text"
                onChangeText={(nama) => this.setState({name: nama})}
              />
            </View>
            <View style={styles.inbody}>
              <Text>Umur</Text>
              <TextInput
                value={this.state.age}
                style={styles.input}
                placeholder="Text"
                onChangeText={(umur) => this.setState({age: umur})}
              />
            </View>
            <View style={styles.inbody}>
              <Text>Alamat</Text>
              <TextInput
                value={this.state.address}
                style={styles.input}
                placeholder="Text"
                onChangeText={(alamat) => this.setState({address: alamat})}
              />
            </View>
          </View>
          <View style={styles.klik}>
            <TouchableOpacity
              onPress={() => this.sendData()}
              style={styles.pactKlik}>
              {this.state.isloading ? (
                <Spinner
                  style={styles.loading}
                  color={'#ffff'}
                  size={25}
                  type="Wave"
                />
              ) : (
                <Text style={styles.textBottom}>Done</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.bottom} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    userImage: (avatar) => dispatch({type: 'SET_IMAGE', payload: avatar}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileStaf);
