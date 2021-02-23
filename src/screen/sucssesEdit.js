import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {styles} from '../styles/styleSuccsesEdit';
import LottieView from 'lottie-react-native';

export class SucssesEdit extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      name: item.nama_barang,
      barcode: item.barcode,
      date: item.updated_at,
      diskon: item.diskon,
      initialPrice: item.harga_beli,
      finalPrice: item.harga_jual,
      stocl: item.stok,
      kodeBarang: item.uid,
      Imagebarcode: false,
    };
  }

  openBarcode() {
    this.setState({Imagebarcode: true});
  }
  closeBarcode() {
    this.setState({Imagebarcode: false});
  }
  render() {
    const {Imagebarcode} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29abe2" />
        <View style={styles.header}>
          <Text style={styles.title}>Sucsess Edit</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inbody}>
            <LottieView
              source={require('../assets/animation/Sucsse.json')}
              style={styles.icon}
              autoPlay
              loop
            />
          </View>
        </View>
        <ScrollView>
          <View style={styles.bottom}>
            <View style={styles.StartBottom}>
              <View>
                <Text>Nama Barang :</Text>
                <Text>{this.state.name}</Text>
              </View>
              <TouchableOpacity onPress={() => this.openBarcode()}>
                <Image
                  style={styles.barcode}
                  source={require('../assets/icon/Barcode.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inBottom}>
              <Text>Harga Beli :</Text>
              <View style={styles.pactRp}>
                <Text>Rp .</Text>
                <Text>{this.state.initialPrice}</Text>
              </View>
            </View>
            <View style={styles.inBottom}>
              <Text>Harga Jual :</Text>
              <View style={styles.pactRp}>
                <Text>Rp .</Text>
                <Text>{this.state.finalPrice}</Text>
              </View>
            </View>
            <View style={styles.inBottom}>
              <Text>Diskon :</Text>
              <Text>{this.state.diskon}</Text>
            </View>
            <View style={styles.inBottom}>
              <Text>Stock :</Text>
              <Text>{this.state.stocl}</Text>
            </View>
            <View style={styles.inBottom}>
              <Text>Update :</Text>
              <Text>{this.state.date}</Text>
            </View>
          </View>
          <View style={styles.pactKlik}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Staf')}
              style={styles.inKlik}>
              <Text style={styles.text}>Done</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Modal transparent={true} animationType="fade" visible={Imagebarcode}>
          <View style={styles.Modal}>
            <View style={styles.inModal}>
              <TouchableOpacity
                onPress={() => this.closeBarcode()}
                style={styles.pactBack}>
                <Image
                  style={styles.back}
                  source={require('../assets/icon/close.png')}
                />
              </TouchableOpacity>
              <Text style={styles.textBarcode}>
                Kode : {this.state.kodeBarang}
              </Text>
              <Image
                style={styles.inBarcode}
                source={{uri: this.state.barcode}}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default SucssesEdit;
