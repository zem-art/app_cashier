import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleStockG';
import {connect} from 'react-redux';
import axios from 'axios';

export class Stock extends Component {
  constructor() {
    super();
    this.state = {
      dataGet: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      await axios
        .get('https://project-mini.herokuapp.com/api/barang', {
          headers: {
            Authorization: `Bearer${this.props.userData.userReducer.token}`,
          },
        })
        .then((result) => {
          // console.log('Sucsees== Get Data++', result.data.data);
          this.setState({dataGet: result.data.data});
        })
        .catch((err) => {
          console.log('Eroro Get Data==', err);
          ToastAndroid.show('Maaf Terjadi Kesalahan', ToastAndroid.LONG);
        });
    } catch (err) {
      console.log('eroro Get Data', err);
      ToastAndroid.show('Maaf Terjadi Kesalahan', ToastAndroid.LONG);
    }
  };
  render() {
    console.log('Ini Data Params==', this.props.route.params);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../assets/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Stok Gudang</Text>
        </View>
        <ScrollView>
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
                    <TouchableOpacity style={styles.Pact1}>
                      <Image
                        style={styles.delete}
                        source={require('../assets/icon/delete.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Pact1}>
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
