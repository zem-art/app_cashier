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
import axios from 'axios';
import {launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';

export class ProfileStaf extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      name: item.nama,
      email: item.email,
      age: JSON.stringify(item.umur),
      address: item.alamat,
      image: item.avatar,
      srcImage: '',
      filename: '',
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
          image: response.uri,
          filename: response.fileName,
        });
      }
    });
  }

  sendData() {
    const data = {
      nama: this.state.name,
      email: this.state.email,
      umur: this.state.age,
      alamat: this.state.address,
    };
    const add = new FormData();
    add.append('avatar', {
      uri: this.state.image,
      type: 'image/jpeg',
      name: this.state.fileName,
    });
    for (var key in data) {
      add.append(key.toString(), data[key]);
    }
    axios({
      url: 'https://project-mini.herokuapp.com/api/update-profile',
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
    })
      .then((result) => {
        console.log('IniBerhasil==', result.data);
      })
      .catch((err) => {
        console.log('Eroror Posdt Data==', err);
      });
  }

  render() {
    // console.log('ini Data Params==', this.props.route.params);
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
              <Image style={styles.profile} source={{uri: this.state.image}} />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <View style={styles.inbody}>
              <Text>Name</Text>
              <TextInput
                value={this.state.name}
                style={styles.input}
                placeholder="Text"
              />
            </View>
            <View style={styles.inbody}>
              <Text>Email</Text>
              <TextInput
                value={this.state.email}
                style={styles.input}
                placeholder="Text"
              />
            </View>
            <View style={styles.inbody}>
              <Text>Umur</Text>
              <TextInput
                value={this.state.age}
                style={styles.input}
                placeholder="Text"
              />
            </View>
            <View style={styles.inbody}>
              <Text>Alamat</Text>
              <TextInput
                value={this.state.address}
                style={styles.input}
                placeholder="Text"
              />
            </View>
          </View>
          <View style={styles.klik}>
            <TouchableOpacity style={styles.pactKlik}>
              <Text>Klik</Text>
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
export default connect(mapStateToProps)(ProfileStaf);
